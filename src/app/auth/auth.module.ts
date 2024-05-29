import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PrimengModule } from '../primeng/primeng.module';
import { AuthRoutingModule } from './auth-routing.module';
import { CrearUserComponent } from './pages/crear-user/crear-user.component';
import { LoginComponent } from './pages/login/login.component';



@NgModule({
  declarations: [
    LoginComponent,
    CrearUserComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    PrimengModule
  ]
})
export class AuthModule { }
