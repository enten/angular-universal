import { ApplicationRef, NgModuleRef, enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { createNewHosts } from '@angularclass/hmr';

import { AppConfigService } from './app/app-config.service';
import { AppBrowserModule } from './app/app.browser.module';
import { environment } from './environments/environment';


if (environment.production) {
  enableProdMode();
}


async function main(): Promise<NgModuleRef<AppBrowserModule>> {
  const ngModuleRef = await platformBrowserDynamic().bootstrapModule(AppBrowserModule);

  if (module.hot) {
    module.hot.accept();

    module.hot.dispose(async () => {
      const appRef = ngModuleRef.injector.get(ApplicationRef);
      const elements = appRef.components.map(c => c.location.nativeElement);
      const makeVisible = createNewHosts(elements);

      ngModuleRef.destroy();

      makeVisible();
    });
  }

  console.log('AppBrowserModule boostraped!', ngModuleRef);

  const appConfigService = ngModuleRef.injector.get(AppConfigService);
  const appConfig = appConfigService.all();

  console.log(appConfig);

  return ngModuleRef;
}


if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', main);
} else {
  main();
}
