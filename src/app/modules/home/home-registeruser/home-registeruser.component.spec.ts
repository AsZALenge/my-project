import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRegisteruserComponent } from './home-registeruser.component';

describe('HomeRegisteruserComponent', () => {
  let component: HomeRegisteruserComponent;
  let fixture: ComponentFixture<HomeRegisteruserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeRegisteruserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeRegisteruserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
