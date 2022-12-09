import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RootObject } from './interface/world-cup-foodie';
import { Meals } from './interface/world-cup-meals';

@Injectable({
  providedIn: 'root'
})
export class WorldCupMealsService {

  constructor(private httpClient: HttpClient) { }

  fetchMeals = (): Observable<RootObject> => {
    return this.httpClient.get<RootObject>("https://www.themealdb.com/api/json/v2/9973533/randomselection.php")
  }
}
