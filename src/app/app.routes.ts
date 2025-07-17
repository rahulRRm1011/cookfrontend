import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Pnf } from './pnf/pnf';
import { Login } from './login/login';
import { Register } from './register/register';
import { ContactComponent } from './contact-component/contact-component';
import { AboutComponent } from './about-component/about-component';
import { RecipeDetails } from './recipe-details/recipe-details';
import { Allrecipes } from './allrecipes/allrecipes';
import { SavedRecipe } from './saved-recipe/saved-recipe';


export const routes: Routes = [
  {
    path:'admin',loadChildren:()=>import('./admin/admin-module').then((m)=>m.AdminModule)
  },
    {

        // http://localhost:4200/
        path:'', component:Home
    },
    {
         path:'login',component:Login
    },
    {
        path:'register',component:Register
    },
    
    {
    path: 'about',
    component: AboutComponent,
  },
   {
    path:'recipes',
    component:Allrecipes 
   },  
    {
        path:'contact',component:ContactComponent
    },
   
  {
    path:'recipe/:id',
    component:RecipeDetails
  },
  {
    path:'savedRecipes',
    component:SavedRecipe
  },
    
];
