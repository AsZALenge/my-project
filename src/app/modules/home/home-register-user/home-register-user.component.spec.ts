import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRegisterUserComponent } from './home-register-user.component';

describe('HomeRegisterUserComponent', () => {
  let component: HomeRegisterUserComponent;
  let fixture: ComponentFixture<HomeRegisterUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeRegisterUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeRegisterUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
