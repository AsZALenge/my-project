import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DormUpdateroomComponent } from './dorm-updateroom.component';

describe('DormUpdateroomComponent', () => {
  let component: DormUpdateroomComponent;
  let fixture: ComponentFixture<DormUpdateroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DormUpdateroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DormUpdateroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
