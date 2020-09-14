import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  about;

  constructor(private dataService: DataServiceService) {
    this.about = {
      "name": "Kalidas Sake",
      "image": "https://lh3.googleusercontent.com/pw/ACtC-3eK5ow_Q-LcuMjtqjkdGx3czq72krKIZtQOeYQvlvCpPATqAs8EcKr_VtO9-wxKAsPIY0E69cP7MIjr6m91OGPvV_uI_Ctwx4gb07qAAsMGswcvMyU_GdP2kWHMAvj83E7Q4OI98_ohs68DybnPYUfYkA=w711-h673-no",
      "description": "hekko",
      "social": {
        "fb": "",
        "tw": "",
        "ln": "",
        "in": ""
      }
    }
  }

  ngOnInit(): void {
    const aboutData = this.dataService.getAbout();
    if (aboutData !== undefined) {
      this.about = aboutData;
    }
  }

}
