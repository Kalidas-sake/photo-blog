import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Post } from '../types/post-types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  latestPost: Post;
  heading = 'latest post'

  constructor(private dataService: DataServiceService) { }

  ngOnInit(): void {
    const posts: Post[] = this.dataService.getPosts()

    if (posts !== undefined) {
      this.latestPost = posts[0]
    }

  }

}
