import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './not-found.component';


const routes: Routes = [
  { path: '', loadChildren: () => import('./welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: '**', component: NotFoundComponent },
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
    }),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule { }
