import { ApplicationRef, NgModuleRef } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppBrowserModule } from './app/app.browser.module';


async function main(): Promise<NgModuleRef<AppBrowserModule>> {
  const ngModuleRef = await platformBrowserDynamic().bootstrapModule(AppBrowserModule);
  const appRef = ngModuleRef.injector.get(ApplicationRef);

  console.log('AppBrowserModule boostraped!', { appRef, ngModuleRef });

  return ngModuleRef;
}


if (document.readyState === 'complete') {
  main().catch(console.error);
} else {
  document.addEventListener('DOMContentLoaded', main);
}
