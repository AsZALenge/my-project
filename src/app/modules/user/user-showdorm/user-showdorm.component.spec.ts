import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserShowdormComponent } from './user-showdorm.component';

describe('UserShowdormComponent', () => {
  let component: UserShowdormComponent;
  let fixture: ComponentFixture<UserShowdormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserShowdormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserShowdormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
