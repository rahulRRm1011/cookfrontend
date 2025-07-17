import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Api } from '../services/api';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { Header } from '../header/header';


@Component({
  selector: 'app-recipe-details',
  imports: [RouterLink,Header],
  templateUrl: './recipe-details.html',
  styleUrl: './recipe-details.css',
})
export class RecipeDetails implements OnInit {
  constructor(private route: ActivatedRoute, private api: Api) {}
  rId: string = '';
  recipeData: any = [];
  relatedRecipes: any = [];
  dummyRelatedData: any = [];
  ngOnInit(): void {
    this.route.params.subscribe((res) => {
      this.rId = res['id'];
      this.getRecipe(this.rId);
    });
  }
  getRecipe(rId: any) {
    this.api.getSingleRecipe(rId).subscribe((res) => {
      this.recipeData = res;
      this.getrelatedRecipe(this.recipeData.cuisine);
      console.log(this.recipeData);
    });
  }
  getrelatedRecipe(cuisine: string) {
    console.log(cuisine);
    this.api.getRelatedRecipes(cuisine).subscribe((res) => {
      this.dummyRelatedData = res;
      this.relatedRecipes = this.dummyRelatedData.filter(
        (eachRecipe: any) => eachRecipe._id != this.rId
      );
      console.log(this.relatedRecipes);
    });
  }

  savedRecipe() {
    try {
      let reqBody = {
        recipeName: this.recipeData.name,
        recipeImage: this.recipeData.image,
      };

      this.api.addSavedRecipe(this.rId, reqBody).subscribe({
        next: (res) => {
          alert('succesfully saved');
        },
        error: (err) => {
          alert('already exists in the saved list');
        },
      });
    } catch (error) {}
  }
  downloadRecipe() {
    const downloadedRecipe = new jsPDF();
    downloadedRecipe.setFontSize(25);
    downloadedRecipe.setTextColor('red');
    downloadedRecipe.text(`${this.recipeData.name}`, 10, 20);
    downloadedRecipe.setFontSize(12);
    downloadedRecipe.setTextColor('black');
    downloadedRecipe.text(`cuisine:${this.recipeData.cuisine}`, 10, 40);
    downloadedRecipe.text(`Servings:${this.recipeData.servings}`, 10, 48);
    downloadedRecipe.text(
      `Mode of Cooking:${this.recipeData.difficulty}`,
      10,
      56
    );
    downloadedRecipe.text(
      `Total prep time:${this.recipeData.prepTimeMinutes}`,
      10,
      64
    );
    downloadedRecipe.text(
      `Cooking time:${this.recipeData.cookTimeMinutes}`,
      10,
      72
    );
    downloadedRecipe.text(
      `Calories:${this.recipeData.caloriesPerServing}`,
      10,
      80
    );

    let head =[['Ingredients needed','Cooking Instructions']]
    let body=[]
    body.push([this.recipeData.ingredients,this.recipeData.instructions])
    autoTable(downloadedRecipe,{
      head,body,startY:100
    })
    downloadedRecipe.output('dataurlnewwindow')
   this.downloadPdf()
    downloadedRecipe.save(`${this.recipeData.name}_recipe`);
  }
  downloadPdf(){
    let reqBody={
      recipeName : this.recipeData.name,
      recipeImage:this.recipeData.image,
      recipeCuisine:this.recipeData.cuisine

    }
    this.api.addDownloadRecipe(this.rId,reqBody).subscribe((res)=>{
      console.log(res)
    })
  }
}
