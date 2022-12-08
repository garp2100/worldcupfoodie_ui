import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { WorldCupDish } from '../interface/world-cup-dish';
import { WorldCupMatchInfo } from '../world-cup-match-info';
import { WorldCupMatchesService } from '../world-cup-matches.service';
@Component({
  selector: 'app-add-test',
  templateUrl: './add-test.component.html',
  styleUrls: ['./add-test.component.css']
})
export class AddTestComponent implements OnInit {
  @Output() dishSave = new EventEmitter<WorldCupDish>();
  matchId: number = 0;
  dish1: string = '';
  description: string = '';
  focusedMatch = <WorldCupMatchInfo> {} as WorldCupMatchInfo;

  constructor(private service2:WorldCupMatchesService) { }
  ngOnInit(): void {
    this.service2.getFocusedMatch().subscribe((data:WorldCupMatchInfo)=>this.focusedMatch=data);

  }

getID():any{
  return this.focusedMatch.id;
}

  submit = (): void => {
    this.dishSave.emit({
      matchId: this.matchId,
      dish1: this.dish1,
      description: this.description,
    });
    this.matchId = this.focusedMatch.id;
    this.dish1 = '';
    this.description = '';
  };
}