import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
];

@NgModule({
  declarations: [ WelcomeComponent ],
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class WelcomeRoutingModule { }
