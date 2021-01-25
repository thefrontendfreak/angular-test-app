import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainViewRoutingModule } from './main-view-routing.module';
import { TopBannerComponent } from './top-banner/top-banner.component';
import { MainViewComponent } from './main-view.component';


@NgModule({
  declarations: [MainViewComponent , TopBannerComponent],
  imports: [
    CommonModule,
    MainViewRoutingModule
  ]
})
export class MainViewModule { }
