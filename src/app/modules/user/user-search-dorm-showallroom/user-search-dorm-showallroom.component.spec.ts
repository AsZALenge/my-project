import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSearchDormShowallroomComponent } from './user-search-dorm-showallroom.component';

describe('UserSearchDormShowallroomComponent', () => {
  let component: UserSearchDormShowallroomComponent;
  let fixture: ComponentFixture<UserSearchDormShowallroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSearchDormShowallroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSearchDormShowallroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
