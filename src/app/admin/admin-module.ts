import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing-module';
import { Dashboard } from './dashboard/dashboard';
import { RecipeList } from './recipe-list/recipe-list';
import { UserList } from './user-list/user-list';
import { DownloadList } from './download-list/download-list';
import { Feedbacklist } from './feedbacklist/feedbacklist';
import { Sidebar } from './sidebar/sidebar';
import { Add } from './add/add';
import { FormsModule } from '@angular/forms';
import { SearchpipePipe } from '../pipes/searchpipe-pipe';



@NgModule({
  declarations: [
    Dashboard,
    RecipeList,
    UserList,
    DownloadList,
    Feedbacklist,
    Sidebar,
    Add
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,SearchpipePipe
  ]
})
export class AdminModule { }
