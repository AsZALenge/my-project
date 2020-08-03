import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManageroomComponent } from './admin-manageroom.component';

describe('AdminManageroomComponent', () => {
  let component: AdminManageroomComponent;
  let fixture: ComponentFixture<AdminManageroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminManageroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminManageroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
