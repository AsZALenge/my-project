import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DormManageComponent } from './dorm-manage.component';

describe('DormManageComponent', () => {
  let component: DormManageComponent;
  let fixture: ComponentFixture<DormManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DormManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DormManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
