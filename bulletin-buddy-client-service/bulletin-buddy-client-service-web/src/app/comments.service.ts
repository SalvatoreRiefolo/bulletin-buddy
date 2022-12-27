import { Injectable } from '@angular/core';
import { PostComment } from './post-comment.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  private commentServiceUrl = '/commentservice/'

  constructor(private http: HttpClient) { }
  getComments(id: string) {
    return this.http.get<PostComment[]>(this.commentServiceUrl + 'comments/' + id);
  }
  addComment(comment: PostComment) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // maybe needed for future: 'Authorization': 'Basic YW5ndWxhcjphbmd1bGFy'
    });
    const options = {
      headers
    };
    return this.http.post<PostComment>(this.commentServiceUrl + 'comments', comment, options);

  }
}
