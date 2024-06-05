import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrimengModule } from '../primeng/primeng.module';
import { SubastasEnEsperaComponent } from './components/subastas-en-espera/subastas-en-espera.component';
import { SubastasEnLineaComponent } from './components/subastas-en-linea/subastas-en-linea.component';
import { CrearProductoComponent } from './pages/crear-producto/crear-producto.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { CountdownPipe } from './pipes/countdown.pipe';
import { UsersLineaPipe } from './pipes/users-linea.pipe';
import { PublicRoutingModule } from './public-routing.module';



@NgModule({
  declarations: [
    PrincipalComponent,
    CountdownPipe,
    UsersLineaPipe,
    SubastasEnEsperaComponent,
    SubastasEnLineaComponent,
    CrearProductoComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    PrimengModule,

  ]
})
export class PublicModule { }
