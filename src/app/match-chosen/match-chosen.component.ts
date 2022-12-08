import { Component, OnInit } from '@angular/core';
import { WorldCupMatchesService } from '../world-cup-matches.service';
import { WorldCupMatchInfo } from '../world-cup-match-info';
import { ReplaySubject } from 'rxjs';
import { Router, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-match-chosen',
  templateUrl: './match-chosen.component.html',
  styleUrls: ['./match-chosen.component.css']
})
export class MatchChosenComponent implements OnInit {
   focusedMatch = <WorldCupMatchInfo> {} as WorldCupMatchInfo;
  // focusedMatch: WorldCupMatchInfo[] = [];

  constructor(private service: WorldCupMatchesService, private router: Router) { }


  ngOnInit(): void {
  
    this.service.getFocusedMatch().subscribe((data:WorldCupMatchInfo)=>this.focusedMatch=data);

    }

}
