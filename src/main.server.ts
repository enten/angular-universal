// These are important and needed before anything else
import 'zone.js/dist/zone-node';
import 'reflect-metadata';

import { createServer } from 'http';
import { join } from 'path';

import { enableProdMode } from '@angular/core';

export { AppServerModule } from './app/app.server.module';

import { ngRenderMiddleware } from './api';

// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

export const PORT = process.env.PORT || 4000;

export const DIST_BROWSER_PATH = join(__dirname, '..', 'browser');
export const INDEX_HTML_PATH = join(DIST_BROWSER_PATH, 'index.html');

export const getRenderModuleFactoryOptions = () => ({
  distBrowserPath: DIST_BROWSER_PATH,
  indexHtmlPath: INDEX_HTML_PATH,
  lazyModuleMap: exports.LAZY_MODULE_MAP,
  ngFactory: exports.AppServerModuleNgFactory
});

let requestListener = ngRenderMiddleware(module);

// Start up the Node server
const server = createServer((req, res) => {
  requestListener(req, res);
});

server.listen(PORT, () => {
  console.log(`Server listening -- http://localhost:${PORT}`);
});

if (module.hot) {
  const hmr = () => {
    const { AppServerModuleNgFactory } = require('./app/app.server.module.ngfactory');

    exports.AppServerModuleNgFactory = AppServerModuleNgFactory;

    requestListener = require('./api').ngRenderMiddleware(module);
  };

  module.hot.accept('./api', hmr);
  module.hot.accept('./app/app.server.module.ngfactory', hmr);
}

export default server;
