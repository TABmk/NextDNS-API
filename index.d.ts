import { Item, Profile } from './types';
export declare class NextDNS {
    API_KEY: string;
    ENDPOINT: string;
    ID: string;
    profile: Profile;
    constructor({ API_KEY, ENDPOINT, ID, }: {
        /**
         * Pass your API key for every calls
         *
    💡   * 💡 Find your API key at the bottom of your account page (https://my.nextdns.io/account).
         */
        API_KEY: string;
        /**
         * API endpoint. Default: `https://api.nextdns.io/`
         */
        ENDPOINT?: string;
        ID?: string;
    });
    private req;
    create: (path: string, body: Profile) => Promise<any>;
    update: (path: string, body: Profile | Item) => Promise<any>;
    replace: (path: string, body: Array<Item>) => Promise<any>;
    get: (path: string) => Promise<any>;
    delete: (path: string) => Promise<any>;
}
