import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DormUpdateconvenComponent } from './dorm-updateconven.component';

describe('DormUpdateconvenComponent', () => {
  let component: DormUpdateconvenComponent;
  let fixture: ComponentFixture<DormUpdateconvenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DormUpdateconvenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DormUpdateconvenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
