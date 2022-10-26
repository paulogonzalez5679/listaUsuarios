import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'tab-home',
        loadChildren: () => import('./tab-home/tab-home.module').then( m => m.TabHomePageModule)
      },
      {
        path: 'tab-list',
        loadChildren: () => import('./tab-list/tab-list.module').then( m => m.TabListPageModule)
      },
      {
        path: '',
        loadChildren: () => import('./tab-home/tab-home.module').then( m => m.TabHomePageModule)
      },
      {
				path: '',
				redirectTo: '/tabs/tab-home',
				pathMatch: 'full'
			}
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
