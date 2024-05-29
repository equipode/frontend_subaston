
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PrincipalComponent } from "./pages/principal/principal.component";



const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'principal', title: 'Principal', component: PrincipalComponent },
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
