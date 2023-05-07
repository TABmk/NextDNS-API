
export default {
  // profile: {
  id: '',
  fingerprint: '',
  name: '',
  security: {
    threatIntelligenceFeeds: false,
    aiThreatDetection: false,
    googleSafeBrowsing: false,
    cryptojacking: false,
    dnsRebinding: false,
    idnHomographs: false,
    typosquatting: false,
    dga: false,
    nrd: false,
    ddns: false,
    parking: false,
    csam: false,
    tlds: [],
  },
  privacy: {
    disguisedTrackers: false,
    allowAffiliate: false,
    blocklists: [],
    natives: [],
  },
  parentalControl: {
    safeSearch: false,
    youtubeRestrictedMode: false,
    blockBypass: false,
    services: [],
    categories: [],
    recreation: {
      times: {},
      timezone: null,
    },
  },
  settings: {
    logs: {
      enabled: false,
      drop: {
        ip: false,
        domain: false,
      },
      retention: 7776000,
      location: '',
    },
    blockPage: {
      enabled: false,
    },
    performance: {
      ecs: false,
      cacheBoost: false,
      cnameFlattening: false,
    },
    web3: false,
  },
  denylist: [],
  allowlist: [],
  rewrites: [],
  // },
};
