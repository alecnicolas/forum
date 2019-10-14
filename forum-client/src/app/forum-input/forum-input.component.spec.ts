import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumInputComponent } from './forum-input.component';

describe('ForumInputComponent', () => {
  let component: ForumInputComponent;
  let fixture: ComponentFixture<ForumInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
