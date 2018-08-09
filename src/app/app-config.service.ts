import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';

export interface AppConfig {
  // tslint:disable-next-line:no-any
  [key: string]: any;
}

export const APP_CONFIG_TOKEN = new InjectionToken<AppConfig>('AppConfigToken');

@Injectable()
export class AppConfigService {
  appConfig: AppConfig;

  constructor(
    @Optional() @Inject(APP_CONFIG_TOKEN)
    appConfig: AppConfig = {} as AppConfig,
  ) {
    this.init(appConfig);
  }

  all() {
    return this.appConfig;
  }

  get<T = any>(key: string, defaultValue?: T): T {
    return this.has(key) ? this.appConfig[key] : defaultValue;
  }

  has(key: string) {
    return key in this.appConfig;
  }

  init(appConfig: AppConfig) {
    this.appConfig = appConfig;
  }

  toJSON() {
    return this.appConfig;
  }
}
