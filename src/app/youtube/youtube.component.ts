import { Component, OnInit, Output } from '@angular/core';
import { YoutubeService } from '../youtube.service';
import { VideoServiceService } from '../video-service.service';
import { Item } from '../item';


@Component({
  selector: 'yvs-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css'],
  providers: [YoutubeService]
})
export class YoutubeComponent implements OnInit {

  items: Item[];
  item: Item;
  // items: Item[];
  constructor(private _ys: YoutubeService, private videoService: VideoServiceService) { }

  ngOnInit() {

    this._ys.search(this.videoService.getQuery()).subscribe(result=>{
      // console.log(result);
      // console.log(result.items);
      this.items = result.items;
      console.log(this.items);
      this.videoService.setItems(this.items);
    });
  }

  onSelectItem(item: Item) {
    // console.log("Tarea Padre"+tarea);
    this.item = item;    
    console.log(item);
  }

}
