import { Injectable } from '@angular/core';
import { WorldCupMatchInfo } from './interface/world-cup-match-info';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'

})
export class WorldCupMatchesService {

  backendURL:string='https://localhost:7235/api';

  constructor(private httpClient:HttpClient) { }

  getAllMatches = ():Observable<WorldCupMatchInfo[]> => {
  return this.httpClient.get<WorldCupMatchInfo[]>(this.backendURL + "/Matches");
  }

  getFocusedMatch= ():Observable<WorldCupMatchInfo> => {
    return this.httpClient.get<WorldCupMatchInfo>(this.backendURL + "/Matches/"+this.eventIDUsing);
  }

  eventIDUsing=1;

  eventBeingUsed(idEvent: number){
    this.eventIDUsing = idEvent;
  }
}
