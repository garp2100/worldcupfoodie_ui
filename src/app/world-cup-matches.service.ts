import { Injectable } from '@angular/core';
import { WorldCupMatchInfo } from './world-cup-match-info';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'

})
export class WorldCupMatchesService {
  // matches: WorldCupMatchInfo[] = [
  //   {
    

  //     id:47,
  //     team1:'Serbia' ,
  //     team2:'Switzerland' ,

  //     matchDate:'2022-12-02 22:00:00.000' ,
  //   },
  //   {
     

  //     id:48,
  //     team1:'Cameroon' ,
  //     team2:'Brazil' ,

  //     matchDate:'2022-12-02 22:00:00.000' ,
  //   },
  //   {
     

  //     id:45,
  //     team1:'Ghana' ,
  //     team2:'Uruguay' ,

  //     matchDate:'2022-12-02 22:00:00.000' ,
  //   },
    
  // ];
  backendURL:string='https://localhost:7235/api';

  constructor(private httpClient:HttpClient) { }
  getAllMatches = ():Observable<WorldCupMatchInfo[]> => {
  return this.httpClient.get<WorldCupMatchInfo[]>(this.backendURL + "/Matches");
}
  // getAllMatches(): WorldCupMatchInfo[] {
  //   return this.matches;
  // }
  addNewMatch =(match:WorldCupMatchInfo):Observable<WorldCupMatchInfo>=>{
    return this.httpClient.post<WorldCupMatchInfo>(this.backendURL + "/Matches",match);
  }
  deleteMatch = (id:number): Observable<void> => {
    return this.httpClient.delete<void>(this.backendURL + "/Matches/"+id);
  }
  getFocusedMatch= ():Observable<WorldCupMatchInfo> => {
    return this.httpClient.get<WorldCupMatchInfo>(this.backendURL + "/Matches/"+this.eventIDUsing);
  }
  eventIDUsing=1;
  
  eventBeingUsed(idEvent: number){
   
    this.eventIDUsing = idEvent;
    
}
returnEventID(): number {
  return this.eventIDUsing;
}
}
