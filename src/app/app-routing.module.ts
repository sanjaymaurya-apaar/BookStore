import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AboutUsComponent } from './public-sections/about-us/about-us.component';
import { AuthComponent } from './auth/auth.component';
import { HowItWorksComponent } from './public-sections/how-it-works/how-it-works.component';
import { PublicComponent } from './books/public.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { HomeComponent } from './public-sections/home/home.component';

const routes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'how-it-works', component: HowItWorksComponent },
  {
    path: 'auth',
    component: AuthComponent,
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'books',
    component: PublicComponent,
    loadChildren: () => import('./books/public.module').then(m => m.PublicModule)
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
