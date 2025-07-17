import { Component, OnInit } from '@angular/core';
import { Api } from '../../services/api';

@Component({
  selector: 'app-recipe-list',
  standalone: false,
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css'
})
export class RecipeList implements OnInit {
   recipes:any=[]
   searchKey:any
  constructor(private api:Api){}
  ngOnInit(): void {
    this.getRecipe()
  }
  getRecipe(){
    this.api.getAllRecipes().subscribe((res)=>{
      this.recipes=res
      console.log(this.recipes)
    })
  }
}
