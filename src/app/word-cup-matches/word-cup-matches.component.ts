import { Component, OnInit } from '@angular/core';
import { WorldCupMatchesService } from '../world-cup-matches.service';
import { WorldCupMatchInfo } from '../world-cup-match-info';
import { ReplaySubject } from 'rxjs';
import { Router, RouterModule, Routes } from '@angular/router';
import { WorldCupFoodieService } from '../world-cup-foodie.service';

@Component({
  selector: 'app-word-cup-matches',
  templateUrl: './word-cup-matches.component.html',
  styleUrls: ['./word-cup-matches.component.css']
})
export class WordCupMatchesComponent implements OnInit {
  allMatches: WorldCupMatchInfo[] = [];

  // constructor(private worldCupMatches: WorldCupMatchesService) { }

  // ngOnInit(): void {
  //   this.allMatches = this.worldCupMatches.getAllMatches();

  // }
  constructor(private service: WorldCupMatchesService, private router: Router,private service1: WorldCupFoodieService) { }

  ngOnInit(): void {
    this.service1.selectedIngredients=[];

  this.service.getAllMatches().subscribe((data:WorldCupMatchInfo[])=>this.allMatches=data);

  }
  goToEditMatch(id: number) {
    this.service.eventBeingUsed(id);
     this.router.navigate(['/poc/']); // route back to all tickets list
  }
  goToAddDish(id: number) {
    this.service.eventBeingUsed(id);
     this.router.navigate(['/add-dish/']); // route back to all tickets list
  }
}
