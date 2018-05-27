import { join, resolve } from 'path';
import { readFileSync } from 'fs';

import { renderModuleFactory } from '@angular/platform-server';

import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';

import * as express from 'express';

// Express server
export const api = express();

// const PORT = process.env.PORT || 4000;
const DIST_BROWSER_FOLDER = resolve(__dirname, '..', 'browser');
const INDEX_HTML_PATH = join(DIST_BROWSER_FOLDER, 'index.html');

// Our index.html we'll use as our template
const INDEX_HTML = readFileSync(INDEX_HTML_PATH).toString();

// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const {
  AppServerModule,
  AppServerModuleNgFactory,
  LAZY_MODULE_MAP
} = require('./app/ngmodule');

api.engine('html', (_, options, callback) => {
  renderModuleFactory(AppServerModuleNgFactory || AppServerModule, {
    // Our index.html
    document: INDEX_HTML,
    url: options.req.url,
    // DI so that we can get lazy-loading to work differently (since we need it to just instantly render it)
    extraProviders: [
      provideModuleMap(LAZY_MODULE_MAP)
    ]
  }).then(html => {
    callback(null, html);
  });
});

api.set('view engine', 'html');
api.set('views', DIST_BROWSER_FOLDER);

// Server static files from /browser
api.get('*.*', express.static(DIST_BROWSER_FOLDER));

// All regular routes use the Universal engine
api.get('*', (req, res) => {
  res.render(INDEX_HTML_PATH, { req });
});
