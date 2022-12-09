import { Component, OnInit } from '@angular/core';
import { RootObject } from '../interface/world-cup-foodie';
import { Meals } from '../interface/world-cup-meals';
import { WorldCupMealsService } from '../world-cup-meals.service';

@Component({
  selector: 'app-list-meals',
  templateUrl: './list-meals.component.html',
  styleUrls: ['./list-meals.component.css']
})
export class ListMealsComponent implements OnInit {
  apiResponse: RootObject = {
    meals: []
  }

  constructor(private service: WorldCupMealsService) { }

  ngOnInit(): void {
  }

  fetchMeals = (): void => {
    this.service.fetchMeals().subscribe((data: RootObject) => this.apiResponse = data);
  }
}
