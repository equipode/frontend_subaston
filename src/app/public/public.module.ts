import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrincipalComponent } from './pages/principal/principal.component';
import { PublicRoutingModule } from './public-routing.module';



@NgModule({
  declarations: [
    PrincipalComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
