import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';

const routes: Route[] = [
  {path: 'about-us', component: AboutUsComponent },
  {path: 'how-it-works', component: HowItWorksComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    HowItWorksComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
