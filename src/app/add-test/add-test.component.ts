import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DishCrudService } from '../dish-crud.service';
import { WorldCupDish } from '../interface/world-cup-dish';
import { WorldCupMatchInfo } from '../world-cup-match-info';
import { WorldCupMatchesService } from '../world-cup-matches.service';
import { Router, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-add-test',
  templateUrl: './add-test.component.html',
  styleUrls: ['./add-test.component.css']
})
export class AddTestComponent implements OnInit {
  focusedMatch = <WorldCupMatchInfo> {} as WorldCupMatchInfo;
  newMatchId: number = this.focusedMatch.id;
  newDish1: string = "";
  newDescription: string = "";
  createdDish: WorldCupDish = {
    matchId: this.focusedMatch.id,
    dish1: "",
    description: "",
  }
  routes: any;

  constructor(private service2:WorldCupMatchesService, private service3:DishCrudService) { }

  ngOnInit(): void {
    this.service2.getFocusedMatch().subscribe((data:WorldCupMatchInfo)=>this.focusedMatch=data);
    this.newMatchId = this.focusedMatch.id
  }

  getID():any{
    return this.focusedMatch.id;
  }

  addDish = (dish: WorldCupDish): void => {
    dish = {matchId: this.focusedMatch.id, dish1: this.newDish1, description: this.newDescription};
    this.service3.addNewDish(dish).subscribe(() => this.service2.getFocusedMatch())
    this.newDish1 = "";
    this.newDescription = "";
    this.reloadPage();
  }

  reloadPage(): void {
    setTimeout(() => {
      location.reload();
    }, 100)
  }
}
