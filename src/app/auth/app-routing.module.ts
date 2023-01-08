import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';

//no children, hence child components will not be injected in
//immediate routing module
// const routes: Route[] = [
//   { path: 'auth', component: AuthComponent },
//   { path: 'auth/login', component: LoginComponent },
//   { path: 'auth/signup', component: SignupComponent },
//   { path: 'auth/change-password', component: ChangePasswordComponent },
// ];

const routes: Route[] = [
  // { path: 'auth', component: AuthComponent, children:[
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'change-password', component: ChangePasswordComponent },
  // ] }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
