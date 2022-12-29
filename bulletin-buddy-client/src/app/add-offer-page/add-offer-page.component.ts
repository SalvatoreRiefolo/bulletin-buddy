import { Component, OnInit } from '@angular/core';
import { Post, PostType, PostType2LabelMapping } from "../post.model";
import { PostsService } from '../posts.service';
import { AuthenticationService } from '../authentication.service';
import * as uuid from 'uuid';

@Component({
  selector: 'app-add-offer-page',
  templateUrl: './add-offer-page.component.html',
  styleUrls: ['./add-offer-page.component.css']
})
export class AddOfferPageComponent implements OnInit {
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
