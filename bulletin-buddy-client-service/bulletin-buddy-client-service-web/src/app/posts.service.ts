import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  postServiceUrl = "/postservice/"

  constructor(private http: HttpClient) {
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
