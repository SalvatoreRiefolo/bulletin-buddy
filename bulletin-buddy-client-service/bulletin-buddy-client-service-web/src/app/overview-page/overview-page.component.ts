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
    /*const getCommentCount = (id: string): number => {
      let count: number = 0;
      // TODO take 1 to get first value
      this.commentsService.getComments(id).pipe(take(1)).subscribe((data: PostComment[]) => {
        /*data.map( data: PostComment[]) => {
        }
        count = data.length;
        console.log(count);
        return data.length;
      });

      return count;
    }*/

    if (this.sortOption == "DESC"){
      console.log("in desc");
      let comments: PostComment[][] = [];
      // store pid and amount of comments
      let myMap = new Map<string, number>();
      let counter: number = 0;

      for (const post of this.filteredPosts) {
        counter = counter + 1;
        console.log("Post gefunden");
        let id: string = post.id;
        // TODO need subscribe as Observable is returned
        // TODO do everything inside subscription
        this.commentsService.getComments(id).subscribe((commentsArray: PostComment[])=>
          {comments.push(commentsArray)/*) console.log(commentsArray);
            myMap.set(id, commentsArray.length); console.log(myMap);*/

            // TODO get id's

            // TODO letzter loop run (alles im comments drin)
            // TODO WORKS + IS SORTED
            //if(counter == this.filteredPosts.length){
            console.log(comments.length);
            if(comments.length == this.filteredPosts.length){
              comments.sort((one,two)=> (one.length > two.length) ? -1:1);
              console.log(comments);

              /*for (const postComment of comments) {
                // TODO get pid
                let pid: string | undefined = postComment.at(0)?.postId;

              }*/

              this.filteredPosts.sort((one, two) => {
                console.log(one.id);
                console.log(two.id);

                // TODO sort posts according to their amout of comments
                // TODO works until here
                let commentOne: PostComment[] | undefined;
                let commentTwo: PostComment[] | undefined;

                for (const commentIter of comments) {
                  console.log(commentIter);
                  let commentTemp = commentIter;
                  if(commentTemp.length != 0){
                  if(commentTemp[0].postId == one.id){
                    console.log("True");
                    commentOne = commentIter;
                  }
                  if(commentTemp[0].postId == two.id){
                    console.log("False");
                    commentTwo = commentIter;
                  }
                  }
                  else{
                    // TODO Fall wo kein comment vorhanden
                    if(commentOne == [] || commentOne == undefined){
                      commentOne = commentTemp;
                    }
                    if(commentTwo==[] || commentTwo == undefined){
                      commentTwo = commentTemp;
                    }
                  }
                }

                /*let counterOne: number | undefined = comments?.at(parseInt(one.id))?.length;
                let counterTwo: number | undefined = comments?.at(parseInt(two.id))?.length;*/
                console.log(commentOne);
                console.log(commentTwo);
                if(commentOne && commentTwo){
                  return (commentOne.length > commentTwo.length ? -1:1);
                }
                return 0;
              });
              }
          });
      }

     /* this.filteredPosts = this.filteredPosts.sort((one, two) =>
        (getCommentCount(one.id) > getCommentCount(two.id))
          ? -1 : 1);*/
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
