import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found.component';
import { WelcomeComponent } from './welcome.component';

export const APP_ID = 'my-app';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: APP_ID }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
