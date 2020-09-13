import { Injectable } from '@angular/core';
import * as stories from '../assets/stories.json';
import * as posts from '../assets/posts.json';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }

  getStories() {
    return JSON.stringify(stories);
  }

  getPosts() {
    return JSON.stringify(posts);
  }
}
