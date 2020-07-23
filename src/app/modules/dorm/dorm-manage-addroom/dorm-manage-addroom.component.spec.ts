import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DormManageAddroomComponent } from './dorm-manage-addroom.component';

describe('DormManageAddroomComponent', () => {
  let component: DormManageAddroomComponent;
  let fixture: ComponentFixture<DormManageAddroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DormManageAddroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DormManageAddroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
