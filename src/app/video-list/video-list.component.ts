import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { VideoServiceService } from '../video-service.service';
import { Item } from '../item';

@Component({
  selector: 'yvs-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  searchQuery: string;
  @Input() items: Item[];
  @Output() notifyItem: EventEmitter<Item> = new EventEmitter<Item>();
  // items: Item[];

  constructor(private videoService: VideoServiceService) { }

  ngOnInit() {
    this.searchQuery = this.videoService.getQuery();
    // console.log(this.searchQuery);
    this.items = this.videoService.getItems();
    console.log(this.items);
  }

  onSelectItem(item: Item) {
    this.notifyItem.emit(item);
  }

}
