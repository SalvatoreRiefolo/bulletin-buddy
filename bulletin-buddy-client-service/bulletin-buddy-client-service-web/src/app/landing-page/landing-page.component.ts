import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  posts: Post[] = [];
  constructor(private postsService: PostsService, private authenticationService: AuthenticationService) {
    this.postsService.getTopPosts().subscribe((data: Post[]) => {
      this.posts = data;
    });
  }

  isLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
  }

  logout(): void {
    this.authenticationService.logout();
  }
  ngOnInit(): void {
  }

}
