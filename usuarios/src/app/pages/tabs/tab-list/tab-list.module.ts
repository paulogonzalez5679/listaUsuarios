import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabListPageRoutingModule } from './tab-list-routing.module';

import { TabListPage } from './tab-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabListPageRoutingModule
  ],
  declarations: [TabListPage]
})
export class TabListPageModule {}
