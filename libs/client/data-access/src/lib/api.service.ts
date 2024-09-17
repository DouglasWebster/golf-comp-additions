import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ICompetitor, ICreateCompetitor, IUpdateCompetitor, IUpsertCompetitor } from '@comp_lib/shared/domain';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly http = inject(HttpClient);
  
  getAllCompetitorItems(): Observable<ICompetitor[]> {
    return this.http.get<ICompetitor[]>(`/api/competitors`);
  }

  getCompetitorById(competitorId: string): Observable<ICompetitor> {
    return this.http.get<ICompetitor>(`/api/competitors/${competitorId}`);
  }

  CreateCompetiror(competitorData: ICreateCompetitor): Observable<ICompetitor> {
    return this.http.post<ICompetitor>(`/api/competitors`, competitorData); 
  }

  updateCompetitor(competitorId: string, competitorData: IUpdateCompetitor): Observable<ICompetitor> {
    return this.http.patch<ICompetitor>(`/api/competitors/${competitorId}`, competitorData);
  }

  createOrUpdateCompetitor(competitorId: string, competitorData: IUpsertCompetitor): Observable<ICompetitor> {
    return this.http.put<ICompetitor>(`/api/competitors/${competitorId}`, competitorData);
  }

  deleteCompetitor(competitorId: string): Observable<ICompetitor> {
    return this.http.delete<never>(`/api/competitor/${competitorId}`);
  }
}
