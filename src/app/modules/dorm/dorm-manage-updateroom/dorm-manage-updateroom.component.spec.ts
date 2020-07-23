import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DormManageUpdateroomComponent } from './dorm-manage-updateroom.component';

describe('DormManageUpdateroomComponent', () => {
  let component: DormManageUpdateroomComponent;
  let fixture: ComponentFixture<DormManageUpdateroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DormManageUpdateroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DormManageUpdateroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
