import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserUploadPaymentComponent } from './user-upload-payment.component';

describe('UserUploadPaymentComponent', () => {
  let component: UserUploadPaymentComponent;
  let fixture: ComponentFixture<UserUploadPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserUploadPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserUploadPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
