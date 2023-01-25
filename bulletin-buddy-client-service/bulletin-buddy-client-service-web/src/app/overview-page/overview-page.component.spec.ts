import { HttpClientTestingModule } from '@angular/common/http/testing';
import {ComponentFixture, fakeAsync, TestBed} from '@angular/core/testing';
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

  it('should check for presence of all options of select', () => {
    const elementOptions = fixture.debugElement.queryAll(By.css('.form-options-sort'));
    expect(elementOptions.length).toEqual(2);
  });

  it('should check if values of dropdown are in correct order', () => {
    const elementOptions = fixture.debugElement.queryAll(By.css('.form-options-sort'));
    expect(elementOptions[0].nativeElement.value).toEqual('DESC');
    expect(elementOptions[1].nativeElement.value).toEqual('DEFAULT');
  });

  it('should click on the second value of the dropdown', () => {
    const elementOptions = fixture.debugElement.queryAll(By.css('.form-options-sort'));
    fixture.detectChanges();
    elementOptions[1].nativeElement.click();
  });

  /*
  it('should check whether selection on dropdown triggers function call', fakeAsync(() => {
    const elementOption = fixture.debugElement.query(By.css('.form-control sort'));
    spyOn(component, 'sort').and.callThrough();
    fixture.detectChanges();
    expect(elementOption.nativeElement.value).toEqual('DESC');
    elementOption.triggerEventHandler('sort', component);
    expect(component.sort).toHaveBeenCalled();
  }));

  it('should check ', fakeAsync(() => {
    const elementOption = fixture.debugElement.queryAll(By.css('.form-control sort'));
    spyOn(component, 'sort').and.callThrough();
    fixture.detectChanges();
    expect(elementOption[0].nativeElement.value).toEqual('DESC');
    elementOption[1].nativeElement.click().then(() => {
      expect(component.sort).toHaveBeenCalled();
    });
  }));*/

});
