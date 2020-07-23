import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DormProfileComponent } from './dorm-profile.component';

describe('DormProfileComponent', () => {
  let component: DormProfileComponent;
  let fixture: ComponentFixture<DormProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DormProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DormProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
