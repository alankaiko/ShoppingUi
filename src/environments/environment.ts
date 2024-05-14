export const environment = {
  production: false,
  apiUrl: 'http://localhost:8087',

  tokenWhitelistedDomains: [new RegExp('localhost:8087')],
  tokenBlacklistedRoutes: [new RegExp('\/oauth\/token')]
};
