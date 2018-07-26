import { Injectable } from '@angular/core';
import { HomeComponent } from './home/home.component';

@Injectable({
  providedIn: 'root'
})
export class VideoServiceService {
  searchQuery: string;
  constructor() { }

  getQuery() {
    return this.searchQuery;
  }

  setQuery(query: string) {
    this.searchQuery = query;
  }


}
