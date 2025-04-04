import { NgModule } from '@angular/core';

import { LoginRoutingModule, routableComponents } from './login-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LoginService } from './login.service';


@NgModule({
  declarations: [routableComponents],
  imports: [
    SharedModule,
    LoginRoutingModule
  ],
  providers: [LoginService],
})
export class LoginModule { }
