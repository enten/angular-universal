# Universal Angular Application

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.0-beta.5.

## Demo

[Live Demo](https://ng-universal-uwasvwgjiu.now.sh/) is running on [now.sh](https://zeit.co/steventen/ng-universal/uwasvwgjiu/).

## About

This starter kit contains all the minimal tooling and configuration you need to kick off your next universal Angular 8 project.

It combines [@angular/cli](https://github.com/angular/angular-cli/tree/v8.0.0-beta.14) and [udk](https://github.com/enten/udk) to won't have to write specific code for development purposes only.

## Features

* [angular 8](https://github.com/angular/angular/tree/8.0.0-beta.14) as universal web application platform
* [module-map-ngfactory-loader 7](https://github.com/angular/universal/tree/v7.1.1) as server side rendering of lazy routes
* [angular/cli 8](https://github.com/angular/angular-cli/tree/v8.0.0-beta.14) as code scaffolder
* [webpack 4](https://github.com/webpack/webpack/tree/v4.29.6) as module bundler
* [node](https://nodejs.org/dist/latest-v8.x/docs/api/) as server
* [express](http://expressjs.com/en/4x/api.html) as request handler
* [udk-builder](https://github.com/enten/udk/blob/master/angular/lib/udk-builder.ts) as architect builder
* [ng-udkc](https://github.com/enten/udk/tree/master/angular#ngcontainer) as extreme live development container to _**reload all the things!**_
    * [webpack/hot/poll](https://github.com/webpack/webpack/blob/v4.29.6/hot/poll.js) to enable hmr on server side
    * [webpack-hot-middleware](https://github.com/webpack-contrib/webpack-hot-middleware) (dynamically mounted on server) and [@angularclass/hmr](https://github.com/gdi2290/angular-hmr) to enable hmr on
browser side
    * [watchpack](https://github.com/webpack/watchpack) to restart dev container when a metafile changed

**Important**: HMR doesn't work yet on server side with lazy routes (but works in browser side). We are trying to find a way which fixes this issue and we're still opened for possible solutions.

## Getting started

```shell
git clone https://github.com/enten/angular-universal my-project
cd my-project
npm install
npm start
```

### Branches

#### Branch [material](https://github.com/enten/angular-universal/tree/material)

<div align="center">
  <img alt="Preview of branch material" src="https://i.imgur.com/khXkDnA.png">
</div>

```shell
git clone https://github.com/enten/angular-universal -b material my-project
cd my-project
npm install
npm start
```

#### Branch [toh](https://github.com/enten/angular-universal/tree/toh)

<div align="center">
  <img alt="Preview of branch toh" src="https://i.imgur.com/T2TzP7t.png">
</div>

```shell
git clone https://github.com/enten/angular-universal -b toh my-project
cd my-project
npm install
npm start
```

#### Branch [i18n](https://github.com/enten/angular-universal/tree/i18n)

<div align="center">
  <img alt="Preview of branch i18n" src="https://i.imgur.com/6h2dkk7.png">
</div>

```shell
git clone https://github.com/enten/angular-universal -b i18n my-project
cd my-project
npm install
npm run start:fr
```

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
