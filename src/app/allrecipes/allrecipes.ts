import { Component, OnInit } from '@angular/core';
import { Api } from '../services/api';
import { FormsModule } from '@angular/forms';

import { Router } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchpipePipe } from '../pipes/searchpipe-pipe';

@Component({
  selector: 'app-allrecipes',
  imports: [FormsModule, NgxPaginationModule, SearchpipePipe],
  templateUrl: './allrecipes.html',
  styleUrl: './allrecipes.css',
})
export class Allrecipes implements OnInit {
  ngOnInit(): void {
    this.getRecipes();
  }

  constructor(private api: Api, private router: Router) {}
  recipeArray: any = [];
  cuisineArray: any = [];
  dummyMealArray: any = [];
  mealArray: any = [];
  p: number = 1;
  searchKey: string = '';

  getRecipes() {
    this.api.getAllRecipes().subscribe((res) => {
      this.recipeArray = res;

      this.recipeArray.forEach((eachrecipe: any) => {
        !this.cuisineArray.includes(eachrecipe.cuisine) &&
          this.cuisineArray.push(eachrecipe.cuisine);
      });
      this.dummyMealArray = this.recipeArray.map(
        (eachRecipe: any) => eachRecipe.mealType
      );
      this.dummyMealArray = this.dummyMealArray.flat(Infinity);

      this.dummyMealArray.forEach((eachMeal: any) => {
        !this.mealArray.includes(eachMeal) && this.mealArray.push(eachMeal);
      });
    });
  }

  filterRecipes(key: string, value: string) {
    this.recipeArray = this.recipeArray.filter((eachRecipe: any) =>
      eachRecipe[key].includes(value)
    );
  }

  onCardClick(id: any) {
    let token = sessionStorage.getItem('token');
    if (token) {
      this.router.navigateByUrl(`/recipe/${id}`);
    } else {
      alert('please login');
    }
  }
}
