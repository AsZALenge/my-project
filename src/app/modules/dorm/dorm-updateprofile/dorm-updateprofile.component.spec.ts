import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DormUpdateprofileComponent } from './dorm-updateprofile.component';

describe('DormUpdateprofileComponent', () => {
  let component: DormUpdateprofileComponent;
  let fixture: ComponentFixture<DormUpdateprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DormUpdateprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DormUpdateprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
