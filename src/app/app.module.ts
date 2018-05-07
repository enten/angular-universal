import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';


export const APP_ID = 'my-app';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: APP_ID }),
  ],
  providers: [],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
