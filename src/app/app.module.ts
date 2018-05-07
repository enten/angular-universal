import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';


export const APP_ID = 'my-app';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: APP_ID }),
    FormsModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
