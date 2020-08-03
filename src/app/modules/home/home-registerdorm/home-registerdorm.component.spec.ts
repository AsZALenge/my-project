import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRegisterdormComponent } from './home-registerdorm.component';

describe('HomeRegisterdormComponent', () => {
  let component: HomeRegisterdormComponent;
  let fixture: ComponentFixture<HomeRegisterdormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeRegisterdormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeRegisterdormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
