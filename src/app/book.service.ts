import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Books,Embedded } from './books';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  baseURL = "https://app.ticketmaster.com/discovery/v2/events.json?apikey=0T2DE1BU19sYbcbJfqnJl2qLnR6lxjNZ";

  constructor(private httpClient: HttpClient) {  }

  public getBookList(): Observable<any> {
    return this.httpClient.get<Embedded[]>(this.baseURL);
  }
}
