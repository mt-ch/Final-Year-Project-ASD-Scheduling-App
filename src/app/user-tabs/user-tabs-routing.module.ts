import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserTabsPage } from './user-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: UserTabsPage,
    children: 
    [
      {
        path: 'user-schedule',
        loadChildren: () => import('../user-schedule/user-schedule.module').then( m => m.UserSchedulePageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserTabsPageRoutingModule {}
