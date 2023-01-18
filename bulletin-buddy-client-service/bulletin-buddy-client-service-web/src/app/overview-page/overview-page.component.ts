import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-overview-page',
  templateUrl: './overview-page.component.html',
  styleUrls: ['./overview-page.component.css']
})
export class OverviewPageComponent implements OnInit {
  public posts: Post[] = [];

  public onlyOwnEntries: boolean = false;

  constructor(private postsService: PostsService, public authenticationService: AuthenticationService) {
    this.postsService.getOverviewPosts().subscribe((data: Post[]) => {
      this.posts = data;
    });
  }

  filterOwnEntries(event: boolean){
    this.onlyOwnEntries = event;
    console.log(this.onlyOwnEntries);
    // this.filteredPosts = this.posts.filter(value => value.type.toString() == this.filterOption);
  }

  ngOnInit(): void {
  }

}
