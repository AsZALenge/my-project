import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DormCheckpaymentComponent } from './dorm-checkpayment.component';

describe('DormCheckpaymentComponent', () => {
  let component: DormCheckpaymentComponent;
  let fixture: ComponentFixture<DormCheckpaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DormCheckpaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DormCheckpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
