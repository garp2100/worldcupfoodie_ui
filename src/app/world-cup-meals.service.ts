import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RootObject } from './interface/world-cup-foodie';
import { Meals, RootObject2 } from './interface/world-cup-meals';

@Injectable({
  providedIn: 'root'
})

export class WorldCupMealsService {

  public selectedMeal: Meals[]=[];

  constructor(private httpClient: HttpClient) { }

  fetchMeals = (): Observable<RootObject2> => {
    return this.httpClient.get<RootObject2>("https://www.themealdb.com/api/json/v2/9973533/randomselection.php")
  }
}
