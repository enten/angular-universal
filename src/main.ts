import { ApplicationRef, NgModuleRef, enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppBrowserModule } from './app/app.browser.module';
import { environment } from './environments/environment';


if (environment.production) {
  enableProdMode();
}


async function main(): Promise<NgModuleRef<AppBrowserModule>> {
  const ngModuleRef = await platformBrowserDynamic().bootstrapModule(AppBrowserModule);
  const appRef = ngModuleRef.injector.get(ApplicationRef);

  console.log('AppBrowserModule boostraped!', { appRef, ngModuleRef });

  return ngModuleRef;
}


if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', main);
} else {
  main();
}
