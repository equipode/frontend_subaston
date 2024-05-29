import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CrearUserComponent } from "./pages/crear-user/crear-user.component";
import { LoginComponent } from "./pages/login/login.component";



const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'login', title: 'Inicio de Sesión', component: LoginComponent },
      { path: 'createUser', title: 'Crear Usuario', component: CrearUserComponent },
      { path: '**', redirectTo: 'login' }
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
export class AuthRoutingModule { }
