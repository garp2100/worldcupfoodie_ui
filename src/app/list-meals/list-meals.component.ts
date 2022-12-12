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
  constructor(private service: WorldCupMealsService) { }

  ngOnInit(): void {
    this.fetchMeals();
  }

  fetchMeals = (): void => {
    this.service.fetchMeals().subscribe((data: RootObject2) => this.apiResponse = data);
  }
}
