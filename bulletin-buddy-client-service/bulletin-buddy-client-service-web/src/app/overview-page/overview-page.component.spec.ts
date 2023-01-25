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
    const elementOptions = fixture.debugElement.queryAll(By.css('.form-options'));
    expect(elementOptions.length).toEqual(3);
  });

  it('should check if default value of select is correct', () => {
    const elementOptions = fixture.debugElement.query(By.css('.form-options'));
    expect(elementOptions.nativeElement.value).toEqual('ALL');
  });

  it('should select the second value of the dropdown', () => {
    const elementOptions = fixture.debugElement.queryAll(By.css('.form-options'));
    fixture.detectChanges();
    elementOptions[1].nativeElement.click();
  });

  // TODO fails but shouldn't?
  it('should check if the second value of the dropdown matches', () => {
    const elementOptions = fixture.debugElement.queryAll(By.css('.form-options'));
    fixture.detectChanges();
    elementOptions[1].nativeElement.click();
    expect(component.filterOption).toEqual('OFFER');
  });

  // TODO fails but shouldn't so checking for calledMethod is not correct atm
  it('should check if after clicking an option filter method is called', () => {
    //const elementOptions = fixture.debugElement.queryAll(By.css('.form-options'));
    const filterMock = spyOn(component, 'filter').and.callThrough();
    //fixture.detectChanges();
    //const elementOptions = fixture.debugElement.queryAll(By.css('.form-options'));
    //elementOptions[1].nativeElement.click();
    //const elementOptions = fixture.debugElement.query(By.css('.form-control'));
    //elementOptions.nativeElement.click();
    fixture.debugElement.query(By.css('.form-control')).triggerEventHandler('select', null);
    expect(filterMock).toHaveBeenCalled();
  });

  // TODO not working yet
  it('should change filterOption value to selected', fakeAsync(() => {
    spyOn(component, 'filter');
    fixture.detectChanges();
    const select = fixture.debugElement.query(By.css('select'));

    fixture.whenStable().then(() => {
      select.nativeElement.dispatchEvent(new Event('filter'));
      fixture.detectChanges();
      expect(component.filterOption).toEqual('OFFER');
      console.log('after expect NYC');
    });
  }));
});
