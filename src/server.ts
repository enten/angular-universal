// These are important and needed before anything else
import 'zone.js/node';

/***************************************************************************************************
 * Initialize the server environment - for example, adding DOM built-in types to the global scope.
 *
 * NOTE:
 * This import must come before any imports (direct or transitive) that rely on DOM built-ins being
 * available, such as `@angular/elements`.
 */
import '@angular/platform-server/init';


import { createServer } from 'node:http';
import { join } from 'node:path';

import { Type } from '@angular/core';

import { ServerAPIOptions, createApi } from './api';
import { AppServerModule } from './app/app.server.module';
import { environment } from './environments/environment';


// WARN: don't remove export of AppServerModule.
// Removing export below will break replaceServerBootstrap() transformer.
export { AppServerModule } from './app/app.server.module';


// WARN: keep in mind that __filename ends with dist/app/server/main.js during runtime.
// WARN: keep in mind that __dirname ends with dist/app/server during runtime.
export const BROWSER_DIST_PATH = join(__dirname, '..', 'browser');

export const getServerAPIOptions = (bootstrap: Type<{}>): ServerAPIOptions => ({
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
  const PORT = process.env['PORT'] ? +process.env['PORT'] : 4000;

  server.listen(PORT, () => {
    console.log(`Server listening -- http://localhost:${PORT}`);
  });
}


export default server;
