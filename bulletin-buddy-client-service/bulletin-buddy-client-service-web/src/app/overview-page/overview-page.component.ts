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

  public filterOption: string;
  public sortOption: string;

  constructor(private postsService: PostsService, public authenticationService: AuthenticationService,
              private commentsService: CommentsService) {
    this.postsService.getOverviewPosts().subscribe((data: Post[]) => {
      this.posts = data;
      this.filteredPosts = data;
    });
    this.filterOption = "ALL";
    this.sortOption = "DEFAULT";
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
    if (this.sortOption == "DESC"){
      let comments: PostComment[][] = [];
      for (const post of this.filteredPosts) {
        let id: string = <string>post.id;
        this.commentsService.getComments(id).subscribe((commentsArray: PostComment[])=>
          {
            comments.push(commentsArray)
            if(comments.length == this.filteredPosts.length){
              comments.sort((one,two)=> (one.length > two.length) ? -1:1);
              this.filteredPosts.sort((one, two) => {
                let commentOne: PostComment[] | undefined;
                let commentTwo: PostComment[] | undefined;
                for (const commentIter of comments) {
                  let commentTemp = commentIter;
                  if(commentTemp.length != 0){
                    // match posts and comments
                  if(commentTemp[0].postId == one.id){
                    commentOne = commentIter;
                  }
                  if(commentTemp[0].postId == two.id){
                    commentTwo = commentIter;
                  }
                  }
                  else{
                    if(commentOne == undefined){
                      commentOne = commentTemp;
                    } else if(commentTwo == undefined){
                      commentTwo = commentTemp;
                    }
                  }
                }
                if(commentOne && commentTwo){
                  return (commentOne.length > commentTwo.length ? -1:1);
                }
                return 0;
              });
              }
          });
      }
    }
    else
    {
      this.postsService.getOverviewPosts().subscribe((data: Post[]) => {
        this.posts = data;
        this.filteredPosts = data;
        this.filter(this.filterOption);
      });
    }
  }

  ngOnInit(): void {
  }

}
