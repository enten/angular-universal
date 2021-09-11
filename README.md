# Angular Universal 100% powered by Angular CLI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.5.

### Fast, Unopinionated, Minimalist starter kit for [Angular Universal][angulario-ssr] 100% powered by [Angular CLI][angular-cli].

Unlike the [Official Angular Universal starter kit][official-universal-kit] and other [Awesome Universal Seed Projects][awesome-angular], this starter kit is **universal 100% which means you developing for both browser and server at the same time**.

The main other difference is that **you only need [Angular CLI](https://angular.io/cli)** to kick off your next [Angular Universal][angulario-ssr] project:

* `ng build` - Building browser and server bundles ;
* `ng serve` - Running [ssr dev server][ssr-dev-server] ;
* `ng serve -c spa` - Running [ssr dev server][ssr-dev-server] with server side rendering disabled of routes only.

In other words, this starter kit gives superpower for those who want develop universal application fastly with no pain. Just keep in mind with great power comes [great responsibility (Universal Gotcha's)][universal-gotchas].

## Getting started

```shell
git clone https://github.com/enten/angular-universal
cd angular-universal
npm install
ng serve
```

## Development server

Run `ng serve` for a [ssr dev server][ssr-dev-server]. Navigate to `http://localhost:4000/`. The app will automatically reload if you change any of the source files.

Tip: run `ng serve -c spa` to disable server side rendering of routes only.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project for production. The build artifacts will be stored in the `dist/` directory.

Run `node dist/app/server/main.js` to start application built.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

[angulario-ssr]: https://angular.io/guide/universal
[angular-cli]: https://github.com/angular/angular-cli
[awesome-angular]: https://github.com/PatrickJS/awesome-angular#universal-seed-projects
[official-universal-kit]: https://github.com/angular/universal-starter
[ssr-dev-server]: https://github.com/angular/universal/tree/master/modules/builders/src/ssr-dev-server
[universal-gotchas]: https://github.com/angular/universal/blob/master/docs/gotchas.md
[webpack-concept-hmr]: https://webpack.js.org/concepts/hot-module-replacement/
