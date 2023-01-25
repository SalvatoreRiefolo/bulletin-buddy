import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs/internal/observable/of';
import { Post, PostType } from '../post.model';
import { PostsService } from '../posts.service';

import { OverviewPageComponent } from './overview-page.component';
import {By} from "@angular/platform-browser";

describe('OverviewPageComponent', () => {
  let component: OverviewPageComponent;
  let fixture: ComponentFixture<OverviewPageComponent>;
  class MockPostsService {
    getOverviewPosts() {
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
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverviewPageComponent ],
      imports: [HttpClientTestingModule],
      providers: [
        { provide: PostsService, useClass: MockPostsService }
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
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

  it('check for presence of all options of select', () => {
    const elementOptions = fixture.debugElement.queryAll(By.css('.form-options'));
    expect(elementOptions.length).toEqual(3);
  });

  it('check if clicking option REQUEST at select works', () => {
    const elementOptions = fixture.debugElement.query(By.css('.form-options'));
    expect(elementOptions.nativeElement.value).toEqual('ALL');
  });

  it('check if clicking option REQUEST at select works', () => {
    const elementOptions = fixture.debugElement.queryAll(By.css('.form-options'));
    elementOptions[2].nativeElement.click();
    fixture.detectChanges();
    expect(elementOptions.nativeElement.value).toEqual('REQUEST');
  });

  /*it('check if clicking option OFFER at select works', () => {
    const elementOptions = fixture.debugElement.queryAll(By.css('.form-options'));
    elementOptions[1].nativeElement.click();
    fixture.detectChanges();
    expect(elementOptions.nativeElement.value).toEqual('OFFER');
  });

  it('check if clicking option OFFER and afterwards ALL at select works', () => {
    const elementOptions = fixture.debugElement.queryAll(By.css('.form-options'));
    elementOptions[1].nativeElement.click();
    fixture.detectChanges();
    //expect(elementOptions.value).toEqual('OFFER');
    elementOptions[0].nativeElement.click();
    fixture.detectChanges();
    expect(elementOptions.nativeElement.value).toEqual('ALL');
  });*/

});
