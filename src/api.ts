import { readFileSync } from 'fs';

import { renderModuleFactory } from '@angular/platform-server';
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';

import * as express from 'express';

export function ngRenderMiddleware(mod) {
  if (typeof mod.exports.getRenderModuleFactoryOptions === 'undefined') {
    throw new Error('getRenderModuleFactoryOptions() is missing.');
  }

  const {
    distBrowserPath,
    indexHtmlPath
  } = mod.exports.getRenderModuleFactoryOptions();

  // Our index.html
  const indexHtml = readFileSync(indexHtmlPath, 'utf-8');

  const api = express();

  api.set('view engine', 'html');
  api.set('views', distBrowserPath);

  api.engine('html', (_, options, callback) => {
    const {
      ngFactory,
      lazyModuleMap
    } = mod.exports.getRenderModuleFactoryOptions();

    renderModuleFactory(ngFactory, {
      document: indexHtml,
      url: options.req.url,
      // DI so that we can get lazy-loading to work differently (since we need it to just instantly render it)
      extraProviders: [
        provideModuleMap(lazyModuleMap)
      ]
    })
    .then(html => callback(null, html));
  });

  // Server static files from /browser
  api.get('*.*', express.static(distBrowserPath));

  // All regular routes use the Universal engine
  api.get('*', (req, res) => res.render(indexHtmlPath, { req }));

  return api;
}
