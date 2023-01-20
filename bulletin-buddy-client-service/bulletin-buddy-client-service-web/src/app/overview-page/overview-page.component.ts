import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import {Post, PostType} from '../post.model';
import { PostsService } from '../posts.service';
import {PostComment} from "../post-comment.model";
import {CommentsService} from "../comments.service";
import {map, Observable, take} from "rxjs";

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
  public sortOption: string = "DEFAULT";

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
    this.sortOption = event;
    // TODO method for: sort posts according to comment count (the one with the most comments first)
    const getCommentCount = (id: string): number => {
      let count: number = 0;
      // TODO take 1 to get first value
      this.commentsService.getComments(id).pipe(take(1)).subscribe((data: PostComment[]) => {
        /*data.map( data: PostComment[]) => {
        }*/
        count = data.length;
        console.log(count);
        return data.length;
      });

      return count;
    }

    if (this.sortOption == "DESC"){
      console.log("in desc");
      //console.log(getCommentCount(this.posts[0].id));
      //console.log(getCommentCount(this.posts[1].id));


      this.filteredPosts = this.filteredPosts.sort((one, two) =>
        (getCommentCount(one.id) > getCommentCount(two.id))
          ? -1 : 1);
    }
    else
    {
      console.log("Default value");
      // TODO filter as then posts is used and therefore initial sorting is applied
      this.filter(this.filterOption);
    }
  }

  ngOnInit(): void {
  }

}
