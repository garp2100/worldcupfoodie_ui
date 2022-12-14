import { Injectable } from '@angular/core';
import { WorldCupMatchInfo } from './interface/world-cup-match-info';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WorldCupMatchesService {

  backendURL:string='https://localhost:7235/api';

  eventIDUsing=1;

  constructor(private httpClient:HttpClient) { }
  getAllMatches = ():Observable<WorldCupMatchInfo[]> => {
  return this.httpClient.get<WorldCupMatchInfo[]>(this.backendURL + "/Matches");
  }

  addNewMatch =(match:WorldCupMatchInfo):Observable<WorldCupMatchInfo>=>{
    return this.httpClient.post<WorldCupMatchInfo>(this.backendURL + "/Matches",match);
  }

  deleteMatch = (id:number): Observable<void> => {
    return this.httpClient.delete<void>(this.backendURL + "/Matches/"+id);
  }

  getFocusedMatch= ():Observable<WorldCupMatchInfo> => {
    return this.httpClient.get<WorldCupMatchInfo>(this.backendURL + "/Matches/"+this.eventIDUsing);
  }

  eventBeingUsed(idEvent: number){
    this.eventIDUsing = idEvent;
  }

  returnEventID(): number {
    return this.eventIDUsing;
  }
}
