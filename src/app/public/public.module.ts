import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrimengModule } from '../primeng/primeng.module';
import { PrincipalComponent } from './pages/principal/principal.component';
import { CountdownPipe } from './pipes/countdown.pipe';
import { PublicRoutingModule } from './public-routing.module';



@NgModule({
  declarations: [
    PrincipalComponent,
    CountdownPipe
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    PrimengModule,

  ]
})
export class PublicModule { }
