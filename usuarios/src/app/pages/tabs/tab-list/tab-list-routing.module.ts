import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabListPage } from './tab-list.page';

const routes: Routes = [
  {
    path: '',
    component: TabListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabListPageRoutingModule {}
