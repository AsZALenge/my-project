import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminShowdormComponent } from './admin-showdorm.component';

describe('AdminShowdormComponent', () => {
  let component: AdminShowdormComponent;
  let fixture: ComponentFixture<AdminShowdormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminShowdormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminShowdormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
