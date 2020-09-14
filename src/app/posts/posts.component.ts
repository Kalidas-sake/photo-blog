import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts;
  constructor(private dataService: DataServiceService) { }

  ngOnInit(): void {
    this.posts = this.dataService.getPosts();
  }

}
