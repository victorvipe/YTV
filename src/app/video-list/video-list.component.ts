import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { VideoServiceService } from '../video-service.service';

@Component({
  selector: 'yvs-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  searchQuery: string;

  constructor(private videoService: VideoServiceService) { }

  ngOnInit() {
    this.searchQuery = this.videoService.getQuery();
    console.log(this.searchQuery);
  }

}
