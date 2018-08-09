import { NgModule } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';

import { AppConfigModule } from './app-config.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found.component';

export const APP_ID = 'my-app';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: APP_ID }),
    BrowserTransferStateModule,
    AppRoutingModule,
    AppConfigModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
