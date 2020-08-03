import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DormAddroomComponent } from './dorm-addroom.component';

describe('DormAddroomComponent', () => {
  let component: DormAddroomComponent;
  let fixture: ComponentFixture<DormAddroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DormAddroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DormAddroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
