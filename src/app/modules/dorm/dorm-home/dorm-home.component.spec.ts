import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DormHomeComponent } from './dorm-home.component';

describe('DormHomeComponent', () => {
  let component: DormHomeComponent;
  let fixture: ComponentFixture<DormHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DormHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DormHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
