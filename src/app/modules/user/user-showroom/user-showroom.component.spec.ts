import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserShowroomComponent } from './user-showroom.component';

describe('UserShowroomComponent', () => {
  let component: UserShowroomComponent;
  let fixture: ComponentFixture<UserShowroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserShowroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserShowroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
