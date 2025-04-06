
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'C:/Program Files/Git/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/Program%20Files/Git/hero-site",
    "route": "/Program%20Files/Git"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/hero-site"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/portfolio"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/contact"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 4962, hash: '0d95f96c1741303c3ef06c64997c59b9e6c59a9a5c0b9be6b6d1731616cefb28', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1078, hash: '8e1c6152b4179e12fb8aa2ab536bcdc34c39654d3f50414719abcebd0195c330', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-DZ6UBGXD.css': {size: 231612, hash: 'B2Fy9V+bfZo', text: () => import('./assets-chunks/styles-DZ6UBGXD_css.mjs').then(m => m.default)}
  },
};
