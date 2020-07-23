import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DormManageSelectroomupdateComponent } from './dorm-manage-selectroomupdate.component';

describe('DormManageSelectroomupdateComponent', () => {
  let component: DormManageSelectroomupdateComponent;
  let fixture: ComponentFixture<DormManageSelectroomupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DormManageSelectroomupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DormManageSelectroomupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
