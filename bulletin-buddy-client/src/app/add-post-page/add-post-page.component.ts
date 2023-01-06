import { Component, OnInit } from '@angular/core';
import { Post, PostType, PostType2LabelMapping } from "../post.model";
import { PostsService } from '../posts.service';
import { AuthenticationService } from '../authentication.service';
import * as uuid from 'uuid';

@Component({
  selector: 'app-post-offer-page',
  templateUrl: './add-post-page.component.html',
  styleUrls: ['./add-post-page.component.css']
})
export class AddPostPageComponent implements OnInit {
  public postType2LabelMapping = PostType2LabelMapping;

  public postTypes = Object.values(PostType).filter(value => typeof value !== 'number');;

  public postType: string = "";

  public body: string = "";

  public title: string = "";

  constructor(
    private postsService: PostsService,
    private authService: AuthenticationService) { }

  submit() {
    console.log(this.postType);
    let p: Post = {
      id: uuid.v4(),
      title: this.title,
      body: this.body,
      publisherEmail: this.authService.getUserEmail(),
      type: this.postType2LabelMapping[this.postType]
    }
    console.log(p);
    this.postsService.addPost(p).subscribe();
  }
  ngOnInit(): void {
  }

}
