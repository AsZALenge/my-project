import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DormManagedormComponent } from './dorm-managedorm.component';

describe('DormManagedormComponent', () => {
  let component: DormManagedormComponent;
  let fixture: ComponentFixture<DormManagedormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DormManagedormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DormManagedormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
