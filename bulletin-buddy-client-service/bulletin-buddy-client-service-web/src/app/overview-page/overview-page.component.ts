import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import {Post, PostType} from '../post.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-overview-page',
  templateUrl: './overview-page.component.html',
  styleUrls: ['./overview-page.component.css']
})
export class OverviewPageComponent implements OnInit {
  public posts: Post[] = [];

  public postTypes = Object.values(PostType).filter(value => typeof value !== 'number');

  public filter_option: string = "ALL";

  constructor(private postsService: PostsService, public authenticationService: AuthenticationService) {
    this.postsService.getOverviewPosts().subscribe((data: Post[]) => {
      this.posts = data;
    });
  }

  filter_change(event: string){
    this.filter_option = event;
    console.log(this.filter_option);
  }

  ngOnInit(): void {
  }

}
