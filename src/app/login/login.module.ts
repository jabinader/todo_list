import { NgModule } from '@angular/core';

import { LoginRoutingModule, routableComponents } from './login-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [routableComponents],
  imports: [
    SharedModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
