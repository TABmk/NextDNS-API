import fetch, { RequestInit } from 'node-fetch';
import { Item, Profile } from './types';
import { version } from './package.json';

import DefaultOpts from './defaultOpts';

// eslint-disable-next-line
export class NextDNS {
  API_KEY: string;

  ENDPOINT: string;

  ID: string;

  profile: Profile;

  constructor({
    API_KEY,
    ENDPOINT,
    ID,
  }: {
    /**
     * Pass your API key for every calls
     *
💡   * 💡 Find your API key at the bottom of your account page (https://my.nextdns.io/account).
     */
    API_KEY: string,
    /**
     * API endpoint. Default: `https://api.nextdns.io/`
     */
    ENDPOINT?: string,
    ID?: string,
  }) {
    this.API_KEY = API_KEY;
    this.ENDPOINT = ENDPOINT || 'https://api.nextdns.io';
    this.ID = ID || '';
    this.profile = DefaultOpts;

    const addMethodToObjectKeys = (obj: Profile, path: string = '') => {
      const currObject = obj;
      Object.keys(obj).forEach((key) => {
        const finPath = `${path}/${key}/`;
        if (Array.isArray(obj[key])) {
          currObject[key].get = () => this.get(finPath);
          currObject[key].replace = (body: Array<Item>) => this.replace(finPath, body);
          currObject[key].add = (body: Item) => this.update(finPath, body);
        }

        if (
          typeof obj[key] === 'object'
            && obj[key] !== null
        ) {
          currObject[key].get = () => this.get(finPath);
          currObject[key].update = (body: Item) => this.update(finPath, body);
          addMethodToObjectKeys(obj[key], `${path}/${key}`);
        }
      });
    };

    addMethodToObjectKeys(this.profile);
  }

  private async req({
    body = {},
    path = '',
    fetchOptions = {},
  }: {
    body?: object,
    path: string,
    fetchOptions?: RequestInit,
  }) {
    const headers = {
      'User-Agent': `NextDNS/${version} (+https://github.com/TABmk/NextDNS-API)`,
      'X-Api-Key': this.API_KEY,
    };

    if (fetchOptions.method !== 'GET') {
      headers['Content-Type'] = 'application/json';
    }

    const fetchOpts: RequestInit = {
      headers,
      ...fetchOptions,
    };

    if (fetchOptions.method !== 'GET') {
      fetchOpts.body = JSON.stringify(body);
    }

    const req = await fetch(`${this.ENDPOINT}${path}`, fetchOpts);

    if (!req.ok) {
      const text = await req.json();

      if (text?.errors?.length) {
        return text;
      }

      throw new Error(`Request error: ${req.statusText}`);
    }

    try {
      const text = await req.json();

      return text;
    } catch (err) {
      return {
        status: req.status,
        statusText: req.statusText,
      };
    }
  }

  create = async (path: string, body: Profile) => (
    this.req({
      body,
      path: `profiles/${path}`,
      fetchOptions: {
        method: 'POST',
      },
    })
  );

  update = (path: string, body: Profile | Item) => (
    this.req({
      body,
      path: `/profiles/${path}/${this.ID}`,
      fetchOptions: {
        method: 'PATCH',
      },
    })
  );

  replace = (path: string, body: Array<Item>) => (
    this.req({
      body,
      path: `/profiles/${path}/${this.ID}`,
      fetchOptions: {
        method: 'PUT',
      },
    })
  );

  get = async (path: string) => (
    this.req({
      path: `/profiles/${this.ID}${path}`,
      fetchOptions: {
        method: 'GET',
      },
    })
  );

  delete = async (path: string) => (
    this.req({
      path: `profiles/${path}/${this.ID}`,
      fetchOptions: {
        method: 'DELETE',
      },
    })
  );
}
