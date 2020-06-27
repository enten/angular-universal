// These are important and needed before anything else
import 'zone.js/dist/zone-node';

import { createServer } from 'http';
import { join } from 'path';

import { Type, enableProdMode } from '@angular/core';

import { ServerAPIOptions, createApi } from './api';
import { AppServerModule } from './app/app.server.module';
import { environment } from './environments/environment';


// WARN: don't remove export of AppServerModule.
// Removing export below will break replaceServerBootstrap() transformer
export { AppServerModule } from './app/app.server.module';


// Faster server renders w/ Prod mode.
// Prod mode isn't enabled by default because that breaks debugging tools like Augury.
if (environment.production) {
  enableProdMode();
}


export const PORT = +process.env.PORT || 4000;
export const BROWSER_DIST_PATH = join(__dirname, '..', 'browser');


export const getServerAPIOptions: (bootstrap: Type<{}>) => ServerAPIOptions = bootstrap => ({
  distPath: BROWSER_DIST_PATH,
  ngSetup: {
    bootstrap,
    providers: [],
  },
  hideSourceMap: environment.production,
});


let requestListener = createApi(getServerAPIOptions(AppServerModule));

// Start up the Node server
const server = createServer((req, res) => {
  requestListener(req, res);
});

server.listen(PORT, () => {
  console.log(`Server listening -- http://localhost:${PORT}`);
});


// HMR on server side
if (module.hot) {
  let AppServerModuleHot = AppServerModule;

  const hmr = () => {
    try {
      AppServerModuleHot = require('./app/app.server.module').AppServerModule;
    } catch (err) {
      console.warn(`[HMR] Cannot update export of AppServerModule. ${err.stack || err.message}`);
    }

    try {
      requestListener = require('./api').createApi(getServerAPIOptions(AppServerModuleHot));
    } catch (err) {
      console.warn(`[HMR] Cannot update server api. ${err.stack || err.message}`);
    }
  };

  module.hot.accept('./api', hmr);
  module.hot.accept('./app/app.server.module', hmr);
}


export default server;
