This project was generated with [Angular CLI][angular-cli] version 9.1.9.

# Angular Universal 100% powered by Angular CLI

### Fast, Unopinionated, Minimalist starter kit for [Angular Universal][angulario-ssr] 100% powered by [Angular CLI][angular-cli].

Unlike the [Official Angular Universal starter kit][official-universal-kit] and other [Awesome Universal Seed Projects][awesome-angular], this starter kit is **universal 100% which means you developing for both browser and server at the same time**.

The main other difference is that **you only need [Angular CLI](https://angular.io/cli)** to kick off your next [Angular Universal][angulario-ssr] project:

* `ng build` - Building bundles for both browser and server platforms in [same compilation][webpack-multicompiler-example] ;
* `ng serve` - Running universal dev server with [Hot Module Replacement (HMR)][webpack-concept-hmr] enabled on browser and server sides ;
* `ng serve -c spa` - Running universal dev server with Server Side Rendering (SSR) disabled for angular routes only.

In other words, this starter kit gives superpower for those who want develop universal application fastly with no pain. Just keep in mind with great power comes [great responsibility (Universal Gotcha's)][universal-gotchas].

## Getting started

```shell
git clone https://github.com/enten/angular-universal
cd angular-universal
npm install
ng serve
```

<!--
TODO(enten): Thinking about removing branches. I will add notice to check if someone ask for update.
-->

<!--
### Branches

<table>
  <thead>
    <th>Branch</th>
    <th></th>
    <th></th>
  </thead>
  <tbody>
    <tr>
      <td><a href="https://github.com/enten/angular-universal/tree/material">material</a></td>
      <td><img alt="Preview of branch material" src="https://i.imgur.com/khXkDnA.png"></td>
      <td><pre></code>git clone https://github.com/enten/angular-universal \
  -b material my-project
cd my-project
npm install
npm start</code></pre></td>
    </tr>
    <tr>
      <td><a href="https://github.com/enten/angular-universal/tree/toh">toh</a></td>
      <td><img alt="Preview of branch toh" src="https://i.imgur.com/T2TzP7t.png"></td>
      <td><pre></code>git clone https://github.com/enten/angular-universal \
  -b toh my-project
cd my-project
npm install
npm start</code></pre></td>
    </tr>
    <tr>
      <td><a href="https://github.com/enten/angular-universal/tree/i18n">i18n</a></td>
      <td><img alt="Preview of branch i18n" src="https://i.imgur.com/6h2dkk7.png"></td>
      <td><pre></code>git clone https://github.com/enten/angular-universal \
  -b i18n my-project
cd my-project
npm install
npm start</code></pre></td>
    </tr>
  </tbody>
</table>
-->

## Development server

Run `ng serve` to start universal dev server. Navigate to [http://localhost:4000/](http://localhost:4000/).

The app will automatically hot-reload on server and browser sides if you change any of the source files.

The full compilation will automatically restart if a hot chunk can't be applied on server side.

Tip: run `ng serve -c spa` to disable server side rendering of routes only.

[![Universal dev server with ng-udkc][preview-img-src]][preview-img-href]

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/app` directory.

Run `ng build --prod` for a production build.

Run `node dist/app/server/main.js` to start application built.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README][angular-cli].


[angulario-ssr]: https://angular.io/guide/universal
[angular-cli]: https://github.com/angular/angular-cli
[awesome-angular]: https://github.com/PatrickJS/awesome-angular#universal-seed-projects
[official-universal-kit]: https://github.com/angular/universal-starter
[preview-img-href]: https://imgur.com/a/cpbhHgg
[preview-img-src]: https://i.imgur.com/vPzCMBk.gif
[universal-gotchas]: https://github.com/angular/universal/blob/master/docs/gotchas.md
[webpack-concept-hmr]: https://webpack.js.org/concepts/hot-module-replacement/
[webpack-multicompiler-example]: https://github.com/webpack/webpack/tree/master/examples/multi-compiler