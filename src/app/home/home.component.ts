import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { VideoServiceService } from '../video-service.service';

@Component({
  selector: 'yvs-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  homeForm: FormGroup;
  searchQuery: string;

  constructor(private router: Router, private videoService: VideoServiceService) { 
    this.homeForm = new FormGroup({
      searchQuery: new FormControl('')
    });
  }

  ngOnInit() {
  }

  getQuery(): string {
    return this.searchQuery;
  }

  onClick(searchQuery: string) {
    if(searchQuery) {
      this.videoService.setQuery(searchQuery);
      this.router.navigate(['/videos']);
    }    
  }

 

}
