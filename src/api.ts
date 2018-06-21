import { join } from 'path';
import { readFileSync } from 'fs';

import { renderModuleFactory } from '@angular/platform-server';
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';
import { ModuleMap } from '@nguniversal/module-map-ngfactory-loader/src/module-map';

import * as express from 'express';

export interface NgRenderMiddlewareOptions {
  browserDistPath: string;
  indexHtmlPath?: string;
  ngModuleFactory: any;
  lazyModuleMap?: ModuleMap;
}

export function ngRenderMiddleware(options: NgRenderMiddlewareOptions) {
  const indexHtmlPath = options.indexHtmlPath || join(options.browserDistPath, 'index.html');
  const indexHtml = readFileSync(indexHtmlPath, 'utf-8');

  const api = express();

  api.set('view engine', 'html');
  api.set('views', options.browserDistPath);

  api.engine('html', (_, { req }, callback) => {
    renderModuleFactory(options.ngModuleFactory, {
      document: indexHtml,
      url: req.url,
      // DI so that we can get lazy-loading to work differently (since we need it to just instantly render it)
      extraProviders: [
        provideModuleMap(options.lazyModuleMap || {})
      ]
    })
    .then(html => callback(null, html));
  });

  // Server static files from /browser
  api.get('*.*', express.static(options.browserDistPath));

  // All regular routes use the Universal engine
  api.get('*', (req, res) => res.render(indexHtmlPath, { req }));

  return api;
}
