import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MaterialModule } from '../material.module';
import { WelcomeComponent } from './welcome.component';


const routes: Routes = [
  { path: '', component: WelcomeComponent },
];


@NgModule({
  declarations: [ WelcomeComponent ],
  imports: [
    RouterModule.forChild(routes),
    MaterialModule,
  ],
  exports: [ RouterModule ],
})
export class WelcomeRoutingModule { }
