// These are important and needed before anything else
import 'zone.js/dist/zone-node';
import 'reflect-metadata';

import { createServer } from 'http';
import { join } from 'path';

import { enableProdMode } from '@angular/core';

export { AppServerModule } from './app/app.server.module';

import { NgRenderMiddlewareOptions, ngRenderMiddleware } from './api';

// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

export const PORT = process.env.PORT || 4000;

// Our browser bundle
export const BROWSER_DIST_PATH = join(__dirname, '..', 'browser');

// Our index.html
export const INDEX_HTML_PATH = join(BROWSER_DIST_PATH, 'index.html');

export const ngRenderMiddlewareOptions: NgRenderMiddlewareOptions = {
  browserDistPath: BROWSER_DIST_PATH,
  indexHtmlPath: INDEX_HTML_PATH,
  get ngModuleFactory() {
    return exports.AppServerModuleNgFactory;
  },
  get lazyModuleMap() {
    return exports.LAZY_MODULE_MAP;
  }
};

let requestListener = ngRenderMiddleware(ngRenderMiddlewareOptions);

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

    requestListener = require('./api').ngRenderMiddleware(ngRenderMiddlewareOptions);
  };

  module.hot.accept('./api', hmr);
  module.hot.accept('./app/app.server.module.ngfactory', hmr);
}

export default server;
