import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Api {

  constructor(private http: HttpClient) {}

  baseURL: string = "http://localhost:3000";

  getLimitedProjects() {
    return this.http.get(`${this.baseURL}/getLimitedRecipes`);
  }

  addTestimony(reqBody: any) {
    return this.http.post(`${this.baseURL}/addTestimony`, reqBody);
  }

  getTestimonies() {
    return this.http.get(`${this.baseURL}/getApprovedTestimony`);
  }

  getAllRecipes() {
    return this.http.get(`${this.baseURL}/getAllRecipes`); 
  }
  

  register(reqBody: any) {
    return this.http.post(`${this.baseURL}/register`, reqBody);
  }

  login(reqBody: any) {
    return this.http.post(`${this.baseURL}/login`, reqBody);
  }

  appendToken() {
    let headers = new HttpHeaders();
    let token = sessionStorage.getItem('token');
    if (token) {
      headers = headers.append('Authorization', `Bearer ${token}`);
    }
    return { headers };
  }

  getSingleRecipe(recipeId: string) {
    return this.http.get(`${this.baseURL}/getSingleRecipe/${recipeId}`, this.appendToken()); 
  }

  getRelatedRecipes(cuisine:string){
    return this.http.get(`${this.baseURL}/relatedRecipes/?cuisine=${cuisine}`,this.appendToken())
  }
  addSavedRecipe(recipeId:any,reqBody:any){
    return this.http.post(`${this.baseURL}/addSavedRecipe/${recipeId}`,reqBody,this.appendToken())
  }
 
  addDownloadRecipe(recipeId:any,reqBody:any){
    return this.http.post(`${this.baseURL}/addDownloadRecipe/${recipeId}`,reqBody,this.appendToken())
  }
  getSavedRecipe(){
    return this.http.get(`${this.baseURL}/getSavedRecipes`,this.appendToken())
  }
  getAllUser(){
    return this.http.get(`${this.baseURL}/getAllUsers`,this.appendToken())
  }
  getAllDownload(){
    return this.http.get(`${this.baseURL}/getAlldownloads`,this.appendToken())
  }
  getAllFeedbacks(){
    return this.http.get(`${this.baseURL}/getAllTestimonies`,)
  }
   
  deleteSavedRecipe(id:any){
    return this.http.delete(`${this.baseURL}/deleteSavedRecipe/${id}`,this.appendToken())
  }
}
