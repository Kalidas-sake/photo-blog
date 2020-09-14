import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  latestPost: any;
  heading = 'latest post'

  constructor(private dataService: DataServiceService) { }

  ngOnInit(): void {
    const posts = this.dataService.getPosts()

    if (posts !== undefined) {
      this.latestPost = posts[0]
    }

  }

}
