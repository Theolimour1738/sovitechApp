import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { CategoriesService } from './services/categories.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'sovitechApp';
  jokes: any[] = [];
  people: any[] = [];
  categories: any[] =[];
  places: any[] = [];
 
  constructor(private JokesServices: CategoriesService){} 

  ngOnInit(){
    //get jokes categories
    this.JokesServices.getJokesCategories()
    .subscribe((categories: any) =>{
    console.log(categories)  
    this.categories = categories;

    //get people names
    this.JokesServices.getPeople()
    .subscribe((people: any)=>{
      console.log(people)
      this.people = people.results;
    })

    //get random jokes
    this.JokesServices.getRandomJoke()
    .subscribe(joke => {
      this.jokes.push(joke)
    });
    });
   
  }
  //search by category
  searchByCategory( category : string){
    this.JokesServices.getCategoryJoke( category)
    .subscribe(joke => {
      this.jokes = [];
      this.jokes.push(joke)
    });
  }

  //search  jokes by  querystring
  searchBySearchTerm(searchTerm: string ){
 if (searchTerm != ''){
    this.JokesServices.searchJokes( searchTerm)
    .subscribe((jokes: any  )=> {
      console.log(jokes);
      this.jokes = jokes.result;
    });

  }
}
 // search people by query string
 searchBySearchName(searchPeople: string){
  if (searchPeople != ''){
    this.JokesServices.searchPeopleByName( searchPeople)
    .subscribe((people: any  )=> {
      console.log(people);
      this.people = people.results;
    });

  }

  }


}

