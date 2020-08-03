import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DormSelectroomupdateComponent } from './dorm-selectroomupdate.component';

describe('DormSelectroomupdateComponent', () => {
  let component: DormSelectroomupdateComponent;
  let fixture: ComponentFixture<DormSelectroomupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DormSelectroomupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DormSelectroomupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
