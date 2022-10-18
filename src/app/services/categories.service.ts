import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
 private apiUrl = 'https://localhost:7212/';
 private jokesUrl = 'https://localhost:7212/';

  constructor( private http: HttpClient) { }

  getJokesCategories(){
   return  this.http.get(this.jokesUrl + 'categories')
  }

  getRandomJoke(){
    return this.http.get(this.jokesUrl + 'random')
  }

  getPeople(){
    return this.http.get(this.apiUrl + 'people')
  }

  // get jokes by category
  getCategoryJoke(category: string){
    return this.http.get(this.jokesUrl + `JokesCategories?category=${category}`)  //https://localhost:7212/JokesCategories?category=animal
  }

  searchJokes(searchTerm: string ){
    return this.http.get(this.jokesUrl + `search/${searchTerm}`)
  }

  searchPeopleByName(searchPeople: string ){
    return this.http.get(this.apiUrl + `searchP/${searchPeople}`)
  }
}
