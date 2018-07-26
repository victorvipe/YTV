import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VideoListComponent } from './video-list/video-list.component';
import { YoutubeComponent } from './youtube/youtube.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'videos', component: YoutubeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
