import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  public url: string = 'https://www.googleapis.com/youtube/v3/search';
  private key: string = 'AIzaSyCjnQyYDwuCqQpZ3-hLkqrIbUjcVh83GLg' 

  constructor(private _http: HttpClient) { }

  search(values: string) {
    let uri = `${this.url}?part=snippet&maxResults=20&q=${values}&key=${this.key}`;
    return this._http.get<any>(uri);
  }
}
