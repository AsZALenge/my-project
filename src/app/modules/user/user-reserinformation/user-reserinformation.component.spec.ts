import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserReserinformationComponent } from './user-reserinformation.component';

describe('UserReserinformationComponent', () => {
  let component: UserReserinformationComponent;
  let fixture: ComponentFixture<UserReserinformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserReserinformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserReserinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
