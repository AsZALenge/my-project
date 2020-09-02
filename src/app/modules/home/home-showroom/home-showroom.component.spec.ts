import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeShowroomComponent } from './home-showroom.component';

describe('HomeShowroomComponent', () => {
  let component: HomeShowroomComponent;
  let fixture: ComponentFixture<HomeShowroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeShowroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeShowroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
