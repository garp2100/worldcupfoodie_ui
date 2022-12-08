import { Component, OnInit } from '@angular/core';
import { DishCrudService } from '../dish-crud.service';
import { Router, RouterModule, Routes } from '@angular/router';
import { WorldCupMatchesService } from '../world-cup-matches.service';
import { WorldCupMatchInfo } from '../world-cup-match-info';
import { WorldCupDish } from '../interface/world-cup-dish';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
@Component({
  selector: 'app-add-dish',
  templateUrl: './add-dish.component.html',
  styleUrls: ['./add-dish.component.css']
})
export class AddDishComponent implements OnInit {
  allDishes: WorldCupDish[] = [];

  constructor(private dishcrudstuff: DishCrudService ,private router: Router,private service2:WorldCupMatchesService) { }
  focusedMatch = <WorldCupMatchInfo> {} as WorldCupMatchInfo;
  focusedDish = <any> {} as any;

  ngOnInit(): void {
    this.service2.getFocusedMatch().subscribe((data:WorldCupMatchInfo)=>this.focusedMatch=data);
    this.dishcrudstuff.getAllDishes().subscribe((data:WorldCupDish[])=>this.allDishes=data);
    this.dishcrudstuff.getFocusedDish(this.focusedMatch.id).subscribe((data:any)=>this.focusedDish=data);

  }

  removeOrder = (id: number): void => {
    this.dishcrudstuff.deleteOrder(id).subscribe(() => this.allDishes);
  }

  addOrder = (order: WorldCupDish): void => {
    this.dishcrudstuff.addNewOrder(order).subscribe(() => this.allDishes);
  }
  addDish = (newDish: WorldCupDish): void => {
    this.dishcrudstuff.addNewDish(newDish);
  }

}
