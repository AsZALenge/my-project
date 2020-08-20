import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DormCreatedormitoryComponent } from './dorm-createdormitory.component';

describe('DormCreatedormitoryComponent', () => {
  let component: DormCreatedormitoryComponent;
  let fixture: ComponentFixture<DormCreatedormitoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DormCreatedormitoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DormCreatedormitoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
