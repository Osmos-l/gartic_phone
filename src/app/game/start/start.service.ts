import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sentence } from './sentence';

@Injectable({
  providedIn: 'root'
})
export class StartService {

  constructor(private httpClient: HttpClient) {}

  public create(sentence: Sentence): Observable<Sentence> {
    return this.httpClient.post<Sentence>('http://localhost:8080/start', sentence);
  }
}
