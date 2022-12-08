import { Component, OnInit } from '@angular/core';
import { WorldCupFoodieService } from '../world-cup-foodie.service';

@Component({
  selector: 'app-grocerylist',
  templateUrl: './grocerylist.component.html',
  styleUrls: ['./grocerylist.component.css']
})
export class GrocerylistComponent implements OnInit {
  selectedIngredients = this.service.selectedIngredients
  constructor(private service: WorldCupFoodieService) { }

  ngOnInit(): void {
  }

}
