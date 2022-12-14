import { Component, OnInit } from '@angular/core';
import { Meals, RootObject2 } from '../interface/world-cup-meals';
import { WorldCupMealsService } from '../world-cup-meals.service';

@Component({
  selector: 'app-list-meals',
  templateUrl: './list-meals.component.html',
  styleUrls: ['./list-meals.component.css']
})
export class ListMealsComponent implements OnInit {
  apiResponse: RootObject2 = new Object as RootObject2;
selectedMeals=this.service.selectedMeal
  constructor(private service: WorldCupMealsService) { }

  ngOnInit(): void {
    this.fetchMeals();
  }

  fetchMeals = (): void => {
    this.service.fetchMeals().subscribe((data: RootObject2) => this.apiResponse = data);
  }
 

  public addMealIDToArray(mealThing: Meals): void {
    if (mealThing){
       this.service.selectedMeal.push(mealThing);
     }
   }

   public deselectOption(mealThing: Meals): void {
    this.service.selectedMeal.splice( this.service.selectedMeal.length-1, 1)
   }
  hasBeenClicked = false;  
    
  toggleDisplayDivIf() {  
    this.hasBeenClicked = !this.hasBeenClicked;  
  }  


}
