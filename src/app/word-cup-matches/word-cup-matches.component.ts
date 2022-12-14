import { Component, OnInit } from '@angular/core';
import { WorldCupMatchesService } from '../world-cup-matches.service';
import { WorldCupMatchInfo } from '../interface/world-cup-match-info';
import { Router, RouterModule, Routes } from '@angular/router';
import { WorldCupFoodieService } from '../world-cup-foodie.service';
import { WorldCupMealsService } from '../world-cup-meals.service';
@Component({
  selector: 'app-word-cup-matches',
  templateUrl: './word-cup-matches.component.html',
  styleUrls: ['./word-cup-matches.component.css']
})
export class WordCupMatchesComponent implements OnInit {
  allMatches: WorldCupMatchInfo[] = [];

  constructor(private service: WorldCupMatchesService, private router: Router,private service1: WorldCupFoodieService,private service3 :WorldCupMealsService) { }

  ngOnInit(): void {
    this.service1.selectedIngredients=[];
this.service3.selectedMeal=[];
  this.service.getAllMatches().subscribe((data:WorldCupMatchInfo[])=>this.allMatches=data);
  }

  goToEditMatch(id: number) {
    this.service.eventBeingUsed(id);
     this.router.navigate(['/poc/']);
  }

  goToAddDish(id: number) {
    this.service.eventBeingUsed(id);
    this.router.navigate(['/add-dish/']);
  }
}
