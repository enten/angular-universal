import { Routes } from '@angular/router';

import { NotFoundComponent } from './not-found.component';


export const APP_ROUTES: Routes = [
  { path: '', loadChildren: () => import('./hello/hello.module').then(m => m.HelloModule) },
  { path: '**', component: NotFoundComponent },
];
