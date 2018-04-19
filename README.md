# NgUniversal

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.0-rc.5.

## Development server

Two different dev servers are provided:

* The universal dev server which enable SSR (build `browser` and `server` targets) ;
* The [SPA](https://en.wikipedia.org/wiki/Single-page_application) dev server which is a [webpack dev server](https://github.com/webpack/webpack-dev-server) (build `browser` target only).

SPA dev server can be useless (or "broken"): it depends on your server implementation.

### Universal dev server

Run `npm run dev` (or `npx ng-udkc`) for an universal dev server. Navigate to [http://localhost:4000/](http://localhost:4000/).

The app will automatically hot-reload on server and browser sides if you change any of the source files.

The server will automatically restart if a change occured in `metafiles` and `metadirs` defined in [udk.container.js](./udk.container.js).

[![Universal dev server with ng-udkc](https://i.imgur.com/vPzCMBk.gif)](https://imgur.com/a/cpbhHgg)

### SPA dev server

Run `npm run dev:spa` (or `npx ng serve --hmr`) for a SPA dev server Navigate to [http://localhost:4200/](http://localhost:4200/).

The app will automatically reload if you change any of the browser source files.

Note: the universal dev server provide an SPA mode too if you navigate to the `index.html`: [http://localhost:4000/index.html](http://localhost:4000/index.html).

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/app` directory.

Run `npm run build:prod` for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
