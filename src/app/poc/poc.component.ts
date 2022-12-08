import { Component, OnInit } from '@angular/core';
import { Meal, RootObject } from '../interface/world-cup-foodie';
import { WorldCupFoodieService } from '../world-cup-foodie.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-poc',
  templateUrl: './poc.component.html',
  styleUrls: ['./poc.component.css']
})
export class PocComponent implements OnInit {
  public ingredientValue!: string;
  apiResponse: RootObject = {
    meals: []
  };
  // public selectedIngredients: string[]=[];
  selectedIngredients = this.service.selectedIngredients
  public dropdownFlag: boolean = false;
  public filterForm: FormGroup = this.fb.group({
		filter: ['', Validators.required],
	});

  constructor(private service: WorldCupFoodieService, private readonly fb:FormBuilder) { }

  ngOnInit(): void {
    this.loadMeals();
  }

  loadMeals = (): void => {
    this.service.getMeals().subscribe((data: RootObject) => this.apiResponse = data);
  }
  public saveIngredient(e: any): void {
    let find = this.apiResponse.meals.find(x => x?.strIngredient === e.target.value);
    console.log(find?.idIngredient)
  }
  public onInputChange(): void {
    if (this.filterForm.get('filter')?.value){
      this.dropdownFlag = true;
    }
    else {
      this.dropdownFlag = false;
    }
  }
  public selectOption(meal: string): void {
   if (meal){
    this.selectedIngredients.push(meal);
   }
  }
  public deselectOption(mealId: number): void {
    this.selectedIngredients.splice(mealId, 1)
  }

}
