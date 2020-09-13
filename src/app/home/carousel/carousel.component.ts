import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/data-service.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  heading = 'Some recent stories'

  stories;

  constructor(private dataService: DataServiceService) { }

  ngOnInit(): void {
    this.stories = JSON.parse(this.dataService.getStories()).default
    console.log("Stories", this.stories);

  }

}
