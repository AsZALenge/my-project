import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRegisterDormComponent } from './home-register-dorm.component';

describe('HomeRegisterDormComponent', () => {
  let component: HomeRegisterDormComponent;
  let fixture: ComponentFixture<HomeRegisterDormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeRegisterDormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeRegisterDormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
