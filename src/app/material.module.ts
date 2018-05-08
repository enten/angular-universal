import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatCheckboxModule
} from '@angular/material';

export const MATERIAL_COMPONENTS = [
  MatButtonModule,
  MatCheckboxModule
];

@NgModule({
  imports: [ MATERIAL_COMPONENTS ],
  exports: [ MATERIAL_COMPONENTS ],
})
export class MaterialModule { }
