import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopBannerComponent } from './top-banner/top-banner.component';

const routes: Routes = [
  {
    path:"",
    component:TopBannerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainViewRoutingModule { }
