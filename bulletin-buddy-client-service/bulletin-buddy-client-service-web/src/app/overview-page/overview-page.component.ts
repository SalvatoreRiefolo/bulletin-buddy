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
  public filteredPosts: Post[] = [];

  public postTypes = Object.values(PostType).filter(value => typeof value !== 'number');

  public filterOption: string = "ALL";

  public onlyOwnEntries: boolean = false;

  public authenticatedEmail: string = "";

  constructor(private postsService: PostsService, public authenticationService: AuthenticationService) {
    this.postsService.getOverviewPosts().subscribe((data: Post[]) => {
      this.posts = data;
      this.filteredPosts = data;
    });
    this.authenticatedEmail = this.authenticationService.getUserEmail();
  }

  filterOwnEntries(event: boolean) {
    this.onlyOwnEntries = event;
    //console.log(this.onlyOwnEntries);
    if (this.onlyOwnEntries) {
      this.filteredPosts = this.filteredPosts.filter(value => value.publisherEmail == this.authenticatedEmail);
    }
    else{
      // TODO unklick = reset to before
      this.filter(this.filterOption);
    }
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

  ngOnInit(): void {
  }

}
