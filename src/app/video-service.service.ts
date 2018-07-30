import { Injectable } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class VideoServiceService {
  searchQuery: string;
  items: Item[]

  constructor() { }

  getQuery() {
    return this.searchQuery;
  }

  setQuery(query: string) {
    this.searchQuery = query;
  }

  getItems(): Item[] {
    return this.items;
  }

  setItems(items: Item[]) {
    this.items = items;
  }

}
