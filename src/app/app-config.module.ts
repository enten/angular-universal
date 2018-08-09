import { NgModule } from '@angular/core';
import { TransferState, makeStateKey } from '@angular/platform-browser';

import { AppConfig, AppConfigService } from './app-config.service';

export const APP_CONFIG_STATE_KEY = makeStateKey<AppConfig>('app.config');

@NgModule({
  providers: [
    AppConfigService,
  ],
})
export class AppConfigModule {
  constructor(
    readonly appConfigService: AppConfigService,
    readonly transferState: TransferState,
  ) {
    const isBrowser = this.transferState.hasKey<AppConfig>(APP_CONFIG_STATE_KEY);

    if (isBrowser) {
      this.onBrowser();
    } else {
      this.onServer();
    }
  }

  onBrowser() {
    const appConfig = this.transferState.get(APP_CONFIG_STATE_KEY, {} as AppConfig);

    this.appConfigService.init(appConfig);
  }

  onServer() {
    this.transferState.onSerialize(APP_CONFIG_STATE_KEY, () => {
      return this.appConfigService;
    });
  }
}
