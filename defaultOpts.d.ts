declare const _default: {
    id: string;
    fingerprint: string;
    name: string;
    security: {
        threatIntelligenceFeeds: boolean;
        aiThreatDetection: boolean;
        googleSafeBrowsing: boolean;
        cryptojacking: boolean;
        dnsRebinding: boolean;
        idnHomographs: boolean;
        typosquatting: boolean;
        dga: boolean;
        nrd: boolean;
        ddns: boolean;
        parking: boolean;
        csam: boolean;
        tlds: any[];
    };
    privacy: {
        disguisedTrackers: boolean;
        allowAffiliate: boolean;
        blocklists: any[];
        natives: any[];
    };
    parentalControl: {
        safeSearch: boolean;
        youtubeRestrictedMode: boolean;
        blockBypass: boolean;
        services: any[];
        categories: any[];
        recreation: {
            times: {};
            timezone: any;
        };
    };
    settings: {
        logs: {
            enabled: boolean;
            drop: {
                ip: boolean;
                domain: boolean;
            };
            retention: number;
            location: string;
        };
        blockPage: {
            enabled: boolean;
        };
        performance: {
            ecs: boolean;
            cacheBoost: boolean;
            cnameFlattening: boolean;
        };
        web3: boolean;
    };
    denylist: any[];
    allowlist: any[];
    rewrites: any[];
};
export default _default;
