import { Injectable } from '@angular/core';
import * as about from '../assets/about.json';
import * as posts from '../assets/posts.json';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }

  getAbout() {
    return JSON.parse(JSON.stringify(about)).default;
  }

  getPosts() {
    return JSON.parse(JSON.stringify(posts)).default;
  }
}
