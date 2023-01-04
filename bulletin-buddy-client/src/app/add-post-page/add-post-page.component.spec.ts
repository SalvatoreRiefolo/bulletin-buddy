import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { AddPostPageComponent } from './add-post-page.component';

describe('AddPostPageComponent', () => {
  let component: AddPostPageComponent;
  let fixture: ComponentFixture<AddPostPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddPostPageComponent],
      imports: [FormsModule, HttpClientTestingModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AddPostPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
