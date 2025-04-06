
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'C:/Program Files/Git/Portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/Program%20Files/Git/Portfolio/hero-site",
    "route": "/Program%20Files/Git/Portfolio"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/Portfolio/hero-site"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/Portfolio/portfolio"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/Portfolio/contact"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/Portfolio/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 4972, hash: '19c40c326dd76b189e2f6f08e7d7ad93091b4a3a1f1afa60fa010eafc1e2c8a1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1088, hash: '3b72f63f1617064ad2f0ad5b66d291eed12aa77bce7e4b61a7ee3a775cf1dc24', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-DZ6UBGXD.css': {size: 231612, hash: 'B2Fy9V+bfZo', text: () => import('./assets-chunks/styles-DZ6UBGXD_css.mjs').then(m => m.default)}
  },
};
