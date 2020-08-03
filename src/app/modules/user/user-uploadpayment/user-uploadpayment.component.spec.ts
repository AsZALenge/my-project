import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserUploadpaymentComponent } from './user-uploadpayment.component';

describe('UserUploadpaymentComponent', () => {
  let component: UserUploadpaymentComponent;
  let fixture: ComponentFixture<UserUploadpaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserUploadpaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserUploadpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
