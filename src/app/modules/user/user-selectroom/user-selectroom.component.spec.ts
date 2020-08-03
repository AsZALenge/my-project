import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSelectroomComponent } from './user-selectroom.component';

describe('UserSelectroomComponent', () => {
  let component: UserSelectroomComponent;
  let fixture: ComponentFixture<UserSelectroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSelectroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSelectroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
