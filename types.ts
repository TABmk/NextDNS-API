export type ResBody = {
  data: object | Array<any>,
  meta: object,
};

export type NewProfile = {
  data: {
    id: string,
    fingerprint: string,
    role: string,
    name: string,
  }
}

export type APIError = {
  errors: [{
    code: string,
    detail?: string,
    source: {
      parameter: 'limit' | 'pointer',
    }
  }]
};

type Pagination = {
  pagination: {
    cursor: string | null,
  }
};

export type Item = Array<{
  id: string,
  active?: boolean,
}>;

export type Profile = {
  name?: string,
  security?: {
    threatIntelligenceFeeds: boolean,
    aiThreatDetection: boolean,
    googleSafeBrowsing: boolean,
    cryptojacking: boolean,
    dnsRebinding: boolean,
    idnHomographs: boolean,
    typosquatting: boolean,
    dga: boolean,
    nrd: boolean,
    ddns: boolean,
    parking: boolean,
    csam: boolean,
    tlds: Array<{
      id: string,
    }>,
  },
  privacy?: {
    blocklists: Array<{
      id: string
    }>,
    natives: Array<{
      id: string
    }>,
    disguisedTrackers: boolean,
    allowAffiliate: boolean,
  },
  parentalControl?: {
    services: Item,
    categories: Item,
    safeSearch: boolean,
    youtubeRestrictedMode: boolean,
    blockBypass: boolean,
  },
  denylist?: Item,
  allowlist?: Item,
  settings?: {
    logs: {
      enabled: boolean,
      drop: {
        ip: boolean,
        domain: boolean,
      },
      retention: number,
      location: string,
    },
    blockPage: {
      enabled: boolean,
    },
    performance: {
      ecs: boolean,
      cacheBoost: boolean,
      cnameFlattening: boolean,
    },
    web3: boolean,
  }
};
