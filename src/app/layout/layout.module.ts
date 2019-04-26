import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { AsidenavbarComponent } from '../page/asidenavbar/asidenavbar.component';
import { FooternavbarComponent } from '../page/footernavbar/footernavbar.component';
import { TopnavbarComponent } from '../page/topnavbar/topnavbar.component';
@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,

  ],
  declarations: [LayoutComponent,AsidenavbarComponent,FooternavbarComponent,TopnavbarComponent]
})
export class LayoutModule { }
