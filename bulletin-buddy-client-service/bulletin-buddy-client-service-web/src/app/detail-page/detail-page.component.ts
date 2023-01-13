import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { CommentsService } from '../comments.service';
import { PostComment } from '../post-comment.model';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {
  public post: Post;
  public comments: PostComment[];
  public commentInput: string;
  private id: string;

  public sort_option: string;

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService,
    private commentsService: CommentsService,
    public authService: AuthenticationService) {
    this.post = new Post();
    this.comments = [];
    this.id = this.route.snapshot.params['id'];
    this.sort_option = "NO";
    this.postsService.getPost(this.id).subscribe((data: Post) => {
      this.post = data;
    });
    this.commentsService.getComments(this.id).subscribe((data: PostComment[]) => {
      console.log(data);
      this.comments = data;
    });
  }
  addComment() {
    let date = new Date().toLocaleString("en-GB").replace('/', '-').replace('/', '-').replace(',', '');
    let comment: PostComment = {
      content: this.commentInput,
      postId: this.id,
      posterEmail: this.authService.getUserEmail(),
      timestamp: date.toString()
    };

    this.commentsService.addComment(comment).subscribe(c => this.comments.push(comment));
  }

  sort_func(event: string){
    this.sort_option = event;
    console.log(this.sort_option);
  }
  ngOnInit(): void {
  }
}
