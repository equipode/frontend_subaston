
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CrearProductoComponent } from "./pages/crear-producto/crear-producto.component";
import { PrincipalComponent } from "./pages/principal/principal.component";



const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('../components/menu/menu.component'),
    children: [
      { path: 'principal', title: 'Principal', component: PrincipalComponent },
      { path: 'subastar_producto', title: 'Subastar Producto', component: CrearProductoComponent },
      { path: '**', redirectTo: 'principal' }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PublicRoutingModule { }
