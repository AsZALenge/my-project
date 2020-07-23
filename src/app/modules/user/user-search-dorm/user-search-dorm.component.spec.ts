import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSearchDormComponent } from './user-search-dorm.component';

describe('UserSearchDormComponent', () => {
  let component: UserSearchDormComponent;
  let fixture: ComponentFixture<UserSearchDormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSearchDormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSearchDormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
