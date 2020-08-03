import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DormRecheckpaymentComponent } from './dorm-recheckpayment.component';

describe('DormRecheckpaymentComponent', () => {
  let component: DormRecheckpaymentComponent;
  let fixture: ComponentFixture<DormRecheckpaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DormRecheckpaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DormRecheckpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
