import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './not-found.component';


const routes: Routes = [
  { path: '', loadChildren: './welcome/welcome.module#WelcomeModule' },
  { path: '**', component: NotFoundComponent },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
    }),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule { }
