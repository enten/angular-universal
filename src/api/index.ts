import { APP_BASE_HREF } from '@angular/common';
import { NgSetupOptions, ngExpressEngine } from '@nguniversal/express-engine';
import * as express from 'express';


export interface ServerAPIOptions {
  distPath: string;
  ngSetup: NgSetupOptions;
  hideSourceMap: boolean;
}


export function createApi(options: ServerAPIOptions) {
  const router = express();

  // Ensures source maps aren't readable on production
  if (options.hideSourceMap) {
    router.get('*.(cs|j)s.map', (_req, res) => res.sendStatus(404));
  }

  router.use(createNgRenderMiddleware(options.distPath, options.ngSetup));

  return router;
}


export function createNgRenderMiddleware(distPath: string, ngSetup: NgSetupOptions) {
  const router = express();

  router.set('view engine', 'html');
  router.set('views', distPath);

  // Server static files from distPath
  router.get('*.*', express.static(distPath, {
    maxAge: '1y',
  }));

  // Angular Express Engine
  router.engine('html', ngExpressEngine(ngSetup));

  // All regular routes use the Universal engine
  router.get('*', (req, res) => res.render('index', {
    req,
    res,
    providers: [
      {
        provide: APP_BASE_HREF,
        useValue: req.baseUrl,
      },
    ],
  }));

  return router;
}
