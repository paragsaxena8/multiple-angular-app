import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent1 } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { View1Component } from './view1/view1.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent1,
    View1Component,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent1]
})
export class AppModule { }
@NgModule({})
export class App1SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppModule,
      providers: []
    }
  }
}
