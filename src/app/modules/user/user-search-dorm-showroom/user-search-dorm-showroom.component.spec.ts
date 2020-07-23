import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSearchDormShowroomComponent } from './user-search-dorm-showroom.component';

describe('UserSearchDormShowroomComponent', () => {
  let component: UserSearchDormShowroomComponent;
  let fixture: ComponentFixture<UserSearchDormShowroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSearchDormShowroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSearchDormShowroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
