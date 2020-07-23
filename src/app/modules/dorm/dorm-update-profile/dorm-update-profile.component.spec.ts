import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DormUpdateProfileComponent } from './dorm-update-profile.component';

describe('DormUpdateProfileComponent', () => {
  let component: DormUpdateProfileComponent;
  let fixture: ComponentFixture<DormUpdateProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DormUpdateProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DormUpdateProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
