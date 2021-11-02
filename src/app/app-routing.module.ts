import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './reader/login/login.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AuthorLoginComponent } from './author/author-login/author-login.component';
import { SuperAdminloginComponent } from './super-admin/super-adminlogin/super-adminlogin.component';
const routes: Routes = [
  { path : 'user-login', component: LoginComponent} ,
  { path : 'admin-login', component: AdminLoginComponent} ,
  { path : 'author-login', component: AuthorLoginComponent} ,
  { path : 'superAdmin-login', component: SuperAdminloginComponent} ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
