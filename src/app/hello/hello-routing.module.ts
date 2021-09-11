import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HelloComponent } from './hello.component';


const routes: Routes = [
  { path: '', component: HelloComponent },
];


@NgModule({
  declarations: [ HelloComponent ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [ RouterModule ],
})
export class HelloRoutingModule { }
