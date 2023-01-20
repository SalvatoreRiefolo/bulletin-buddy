import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { of } from 'rxjs/internal/observable/of';
import { PostComment } from '../post-comment.model';
import { Post, PostType } from '../post.model';
import { PostsService } from '../posts.service';
import { DetailPageComponent } from './detail-page.component';
import { CommentsService } from '../comments.service';

describe('DetailPageComponent', () => {
  let component: DetailPageComponent;
  let fixture: ComponentFixture<DetailPageComponent>;
  class MockPostsService {
    getPost() {
      let mockPost: Post = {
        id: "1",
        title: "myTitle",
        body: "myBody",
        publisherEmail: "my@email.com",
        type: PostType.OFFER
      }
      return of(mockPost);
    }
  }
  class MockCommentsService {
    getComments(id: string) {
      let postComment: PostComment = {
        content: "myContent",
        timestamp: "2022-16-01",
        posterEmail: "my@email.com",
        postId: "1"
      }
      return of([postComment]);
    }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailPageComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [
        { provide: PostsService, useClass: MockPostsService },
        { provide: CommentsService, useClass: MockCommentsService }
      ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(DetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Post details should be equal to the values from PostsService', () => {
    expect(component.post["id"]).toEqual('1');
    expect(component.post["title"]).toEqual('myTitle');
    expect(component.post["body"]).toEqual('myBody');
    expect(component.post["publisherEmail"]).toEqual('my@email.com');
    expect(component.post["type"]).toEqual(PostType.OFFER);
  });

  it('check comments', () => {
    expect(component.comments[0]["postId"]).toEqual('1');
    expect(component.comments[0]["timestamp"]).toEqual("2022-16-01");
    expect(component.comments[0]["content"]).toEqual('myContent');
    expect(component.comments[0]["posterEmail"]).toEqual('my@email.com');
  });

  it('should return array of length 1', () => {
    expect(component.comments.length).toEqual(1);
  });
});
