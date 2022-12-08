import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Meal, RootObject } from './interface/world-cup-foodie';


@Injectable({
  providedIn: 'root'
})
export class WorldCupFoodieService {
  public selectedIngredients: string[]=[];
  constructor(private httpClient: HttpClient) { }

  getMeals = (): Observable<RootObject> => {
    return this.httpClient.get<RootObject>("https://www.themealdb.com/api/json/v2/9973533/list.php?i=list")
  }

  // getItems = (): Observable<> => {
  //   return this.httpClient.get<>("")
  // }
}
