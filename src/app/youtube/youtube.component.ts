import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../youtube.service';
import { VideoServiceService } from '../video-service.service';


@Component({
  selector: 'yvs-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css'],
  providers: [YoutubeService]
})
export class YoutubeComponent implements OnInit {

  constructor(private _ys: YoutubeService, private videoService: VideoServiceService) { }

  ngOnInit() {

    this._ys.search(this.videoService.getQuery()).subscribe(result=>{
      console.log(result);
    });
  }

}
