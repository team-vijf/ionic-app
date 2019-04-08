import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { BuildingResolverService } from '../resolver/building-resolver-service';
import { Tab2Page } from '../tab2/tab2.page';
import { Tab3Page } from '../tab3/tab3.page';
import { Tab1Page } from '../tab1/tab1.page';
import { ClassroomResolverService } from '../resolver/classroom-resolver-service';
import { ClassroomPage } from '../classroom/classroom.page';

const routes: Routes = [
  {
    path: 'app',
    component: TabsPage,
    resolve: {buildings: BuildingResolverService},
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            component: Tab1Page,
            loadChildren: '../tab1/tab1.module#Tab1PageModule'
          }
        ]
      },
      {
        path: 'buildings',
        children: [
          {
            path: '',
            component: Tab2Page,
            loadChildren: '../tab2/tab2.module#Tab2PageModule'
          }
        ]
      },
      {
        path: 'settings',
        children: [
          {
            path: '',
            component: Tab3Page,
            loadChildren: '../tab3/tab3.module#Tab3PageModule'
          }
        ]
      },
      {
        path: 'classroom/:classcode',
        component: ClassroomPage,
        resolve: {classroom: ClassroomResolverService},
        loadChildren: '../classroom/classroom.module#ClassroomPageModule'
      },
      {
        path: '',
        redirectTo: '/app/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/app/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
