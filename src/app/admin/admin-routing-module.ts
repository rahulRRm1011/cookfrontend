import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { RecipeList } from './recipe-list/recipe-list';
import { UserList } from './user-list/user-list';
import { DownloadList } from './download-list/download-list';
import { Feedbacklist } from './feedbacklist/feedbacklist';

const routes: Routes = [
  {
    path:'',
    component:Dashboard,
    title:'admin-dashboard'
  },
  {
    path:'recipe-list',
    component:RecipeList,
    title:'admin-recipe-list'
  },
  {
    path:'user-list',
    component:UserList,
    title:'admin-user-list'
  },
  {
    path:'download-list',
    component:DownloadList,
    title:'admin-download-list'
  },
  {
    path:'feedback-list',
    component:Feedbacklist,
    title:'admin-feedback-list'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
