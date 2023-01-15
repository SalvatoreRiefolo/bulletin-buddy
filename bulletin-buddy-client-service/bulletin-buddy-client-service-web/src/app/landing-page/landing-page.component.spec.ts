import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs/internal/observable/of';
import { AuthenticationService } from '../authentication.service';
import { Post, PostType } from '../post.model';
import { PostsService } from '../posts.service';

import { LandingPageComponent } from './landing-page.component';

describe('LandingPageComponent', () => {
  let component: LandingPageComponent;
  let fixture: ComponentFixture<LandingPageComponent>;
  class MockPostsService {
    getTopPosts() {
      let mockPost: Post = {
        id: "1",
        title: "myTitle",
        body: "myBody",
        publisherEmail: "my@email.com",
        type: PostType.OFFER
      }
      return of([mockPost]);
    }
  }
  class MockAuthenticationService {
    isLoggedIn() {
      return of(true);
    }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LandingPageComponent],
      imports: [HttpClientTestingModule],
      providers: [
        { provide: PostsService, useClass: MockPostsService },
        { provide: AuthenticationService, useClass: MockAuthenticationService }
      ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(LandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should return that user is logged in', () => {
    expect(component.isLoggedIn()).toBeTruthy();
  });

  it('should return array of length 1', () => {
    expect(component.posts.length).toEqual(1);
  });

  it('check values of the array', () => {
    expect(component.posts[0]["id"]).toEqual('1');
    expect(component.posts[0]["title"]).toEqual('myTitle');
    expect(component.posts[0]["body"]).toEqual('myBody');
    expect(component.posts[0]["publisherEmail"]).toEqual('my@email.com');
    expect(component.posts[0]["type"]).toEqual(PostType.OFFER);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
