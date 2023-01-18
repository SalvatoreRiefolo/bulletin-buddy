import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import {Post, PostType} from '../post.model';
import { PostsService } from '../posts.service';
import {PostComment} from "../post-comment.model";
import {CommentsService} from "../comments.service";
import {map, Observable} from "rxjs";

@Component({
  selector: 'app-overview-page',
  templateUrl: './overview-page.component.html',
  styleUrls: ['./overview-page.component.css']
})
export class OverviewPageComponent implements OnInit {
  public posts: Post[] = [];
  public filteredPosts: Post[] = [];

  public postTypes = Object.values(PostType).filter(value => typeof value !== 'number');

  public filterOption: string = "ALL";

  constructor(private postsService: PostsService, public authenticationService: AuthenticationService,
              private commentsService: CommentsService) {
    this.postsService.getOverviewPosts().subscribe((data: Post[]) => {
      this.posts = data;
      this.filteredPosts = data;
    });
  }

  filter(event: string){
    this.filterOption = event;
    console.log(this.filterOption);
    if (this.filterOption == 'ALL')
    {
      this.filteredPosts = this.posts;
    }
    else
    {
      this.filteredPosts = this.posts.filter(value => value.type.toString() == this.filterOption);
    }
  }

  sort(event: string){
    // TODO method for: sort posts according to comment count (the one with the most comments first)
    // TODO improve maybe the getCount function
    function getCount(comments: Observable<PostComment[]>): number {
      let counter: number = 0;
      comments.pipe(map((result: string | any[]) => {counter = result.length}))
      return counter;
    }
    this.filteredPosts = this.filteredPosts.sort((one, two) =>
      (getCount(this.commentsService.getComments(one.id)) > getCount(this.commentsService.getComments(two.id))
        ? 1 : -1));
  }

  ngOnInit(): void {
  }

}
