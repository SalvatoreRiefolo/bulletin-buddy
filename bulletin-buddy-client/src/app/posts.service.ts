import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { postServiceUrl } from './global';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  body: string;

  constructor(private http: HttpClient) {
    this.body = "Cras mattis justo ac posuere pellentesque. Vestibulum sed semper felis. Integer at leo congue, dignissim lacus ut, consectetur lectus.";
  }

  getTopPosts() {
    return this.http.get<Post[]>(postServiceUrl + 'posts');
  }
  getOverviewPosts() {
    return this.http.get<Post[]>(postServiceUrl + 'posts');
  }

  getPost(id: string) {
       return this.http.get<Post>(postServiceUrl + 'posts/' + id);
  }
}
