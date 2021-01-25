import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { MainViewModule } from './main-view/main-view.module';
import { MainViewRoutingModule } from './main-view/main-view-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainViewModule,
    MainViewRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
