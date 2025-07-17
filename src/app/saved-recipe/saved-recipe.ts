import { Component, OnInit } from '@angular/core';
import { Api } from '../services/api';
import { identifierName } from '@angular/compiler';
import { Header } from '../header/header';



@Component({
  selector: 'app-saved-recipe',
  imports: [Header],
  templateUrl: './saved-recipe.html',
  styleUrl: './saved-recipe.css'
})
export class SavedRecipe implements OnInit {

  savedRec:any=[]
  
  constructor(private api:Api){}
  ngOnInit(): void {
    this.savedRecipes()
    
  }

  savedRecipes(){
    this.api.getSavedRecipe().subscribe((res)=>{
      console.log(res)
      this.savedRec = res
    })
  }
  deletedRecipe(id:string){
    this.api.deleteSavedRecipe(id).subscribe({
      next:()=>{
        this.savedRec=this.savedRec.filter((eachDelRec:any)=>eachDelRec._id!=id)
        alert("succesfully deleted")
        this.savedRecipes()
      
      },error:(err)=>{
         console.log(err)
         alert("Cannot delete the recipe")
      }
    })
  }
      
}
