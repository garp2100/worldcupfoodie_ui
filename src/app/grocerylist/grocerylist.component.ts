import { Component, OnInit } from '@angular/core';
import { WorldCupFoodieService } from '../world-cup-foodie.service';
import { WorldCupMealsService } from '../world-cup-meals.service';
import { Meals, RootObject2 } from '../interface/world-cup-meals';

@Component({
  selector: 'app-grocerylist',
  templateUrl: './grocerylist.component.html',
  styleUrls: ['./grocerylist.component.css']
})

export class GrocerylistComponent implements OnInit {
  checkboxes = [
    {
      value: 'one',
      selected: false
    },
    {
      value: 'two',
      selected: false
    },
    {
      value: 'three',
      selected: false
    },
    {
      value: 'four',
      selected: false
    }
  ]
  selectedIngredients = this.service.selectedIngredients
  allChosenMealsFromGrocery: Meals[] =this.service2.selectedMeal;

  apiResponse: RootObject2 = new Object as RootObject2;

  constructor(private service: WorldCupFoodieService,private service2:WorldCupMealsService) { }

  ngOnInit(): void {
    this.service2.fetchMeals().subscribe((data: RootObject2) => this.apiResponse = data);

  }
  public getSelected() {
    let result = this.checkboxes.filter((ch) => { return ch.selected })
                     .map((ch) => { return ch.value });
    console.log(result);
}
}
