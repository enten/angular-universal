// These are important and needed before anything else
import 'zone.js/dist/zone-node';

import 'reflect-metadata';

import { createServer } from 'http';
import { join } from 'path';

import { enableProdMode } from '@angular/core';
import { NgSetupOptions } from '@nguniversal/express-engine';
import { MODULE_MAP } from '@nguniversal/module-map-ngfactory-loader';

import { ServerAPIOptions, createApi } from './api';
import { environment } from './environments/environment';


// WARN: don't remove export of AppServerModule.
// Removing export below will break replaceServerBootstrap() transformer
export { AppServerModule } from './app/app.server.module';


// Faster server renders w/ Prod mode.
// Prod mode isn't enabled by default because that breaks debugging tools like Augury.
if (environment.production) {
  enableProdMode();
}


export const PORT = process.env.PORT || 4000;
export const BROWSER_DIST_PATH = join(__dirname, '..', 'browser');


export const getNgRenderMiddlewareOptions: () => NgSetupOptions = () => ({
  bootstrap: exports.AppServerModule,
  providers: [
    // Import module map for lazy loading
    {
      provide: MODULE_MAP,
      useFactory: () => exports.LAZY_MODULE_MAP,
      deps: [],
    },
  ],
});

export const getServerAPIOptions: () => ServerAPIOptions = () => ({
  distPath: BROWSER_DIST_PATH,
  ngSetup: getNgRenderMiddlewareOptions(),
});


let requestListener = createApi(getServerAPIOptions());

// Start up the Node server
const server = createServer((req, res) => {
  requestListener(req, res);
});

server.listen(PORT, () => {
  console.log(`Server listening -- http://localhost:${PORT}`);
});


// HMR on server side
if (module.hot) {
  const hmr = () => {
    try {
      const { AppServerModule } = require('./app/app.server.module');
      exports.AppServerModule = AppServerModule;
    } catch (err) {
      console.warn(`[HMR] Cannot update export of AppServerModule. ${err.stack || err.message}`);
    }

    try {
      requestListener = require('./api').createApi(getServerAPIOptions());
    } catch (err) {
      console.warn(`[HMR] Cannot update server api. ${err.stack || err.message}`);
    }
  };

  module.hot.accept('./api', hmr);
  module.hot.accept('./app/app.server.module', hmr);
}


export default server;
