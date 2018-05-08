import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatCardModule,
  MatToolbarModule
} from '@angular/material';

export const MATERIAL_COMPONENTS = [
  MatButtonModule,
  MatCardModule,
  MatToolbarModule
];

@NgModule({
  imports: [ MATERIAL_COMPONENTS ],
  exports: [ MATERIAL_COMPONENTS ],
})
export class MaterialModule { }
