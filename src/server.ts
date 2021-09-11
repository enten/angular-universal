// These are important and needed before anything else
import 'zone.js/dist/zone-node';

import { createServer } from 'http';
import { join } from 'path';

import { Type, enableProdMode } from '@angular/core';

import { ServerAPIOptions, createApi } from './api';
import { AppServerModule } from './app/app.server.module';
import { environment } from './environments/environment';


// WARN: don't remove export of AppServerModule.
// Removing export below will break replaceServerBootstrap() transformer.
export { AppServerModule } from './app/app.server.module';


// Faster server renders w/ Prod mode.
// Prod mode isn't enabled by default because that breaks debugging tools like Augury.
if (environment.production) {
  enableProdMode();
}


// WARN: keep in mind that __filename ends with dist/app/server/main.js during runtime.
// WARN: keep in mind that __dirname ends with dist/app/server during runtime.
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

// Create the Node server
const server = createServer((req, res) => {
  requestListener(req, res);
});


// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = mainModule && mainModule.filename || '';
if (
  moduleFilename === __filename
  || moduleFilename.includes('iisnode')
) {
  const PORT = process.env.PORT ? +process.env.PORT : 4000;

  server.listen(PORT, () => {
    console.log(`Server listening -- http://localhost:${PORT}`);
  });
}


export default server;
