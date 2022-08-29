import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullwidthComponent } from './fullwidth.component';

import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from '../../modules/login/login.component';
import { RegisterComponent } from '../../modules/register/register.component';
import { MatCommonModule } from '@angular/material/core';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '../../shared/shared.module';




@NgModule({
  declarations: [
    FullwidthComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    MatCommonModule,
    RouterTestingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],

})
export class FullwidthModule { }
