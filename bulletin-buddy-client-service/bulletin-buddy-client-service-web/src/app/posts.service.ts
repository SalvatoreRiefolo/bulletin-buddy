import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  body: string;
  postServiceUrl = "/postservice/"

  constructor(private http: HttpClient) {
    this.body = "Cras mattis justo ac posuere pellentesque. Vestibulum sed semper felis. Integer at leo congue, dignissim lacus ut, consectetur lectus.";
  }

  getTopPosts() {
    return this.http.get<Post[]>(this.postServiceUrl + 'posts');
  }
  getOverviewPosts() {
    return this.http.get<Post[]>(this.postServiceUrl + 'posts');
  }

  getPost(id: string) {
    return this.http.get<Post>(this.postServiceUrl + 'posts/' + id);
  }

  addPost(post: Post) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // maybe needed for future: 'Authorization': 'Basic YW5ndWxhcjphbmd1bGFy'
    });
    const options = {
      headers
    };
    return this.http.post<Post>(this.postServiceUrl + 'posts', post, options);

  }
}
