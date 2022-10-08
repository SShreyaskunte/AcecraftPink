import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { BodyComponent } from './body/body.component';
import { CollegeComponent } from './college/college.component';
import { EnterpriseComponent } from './enterprise/enterprise.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    BodyComponent,
    CollegeComponent,
    EnterpriseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
