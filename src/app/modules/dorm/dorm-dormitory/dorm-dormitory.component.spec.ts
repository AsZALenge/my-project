import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DormDormitoryComponent } from './dorm-dormitory.component';

describe('DormDormitoryComponent', () => {
  let component: DormDormitoryComponent;
  let fixture: ComponentFixture<DormDormitoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DormDormitoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DormDormitoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
