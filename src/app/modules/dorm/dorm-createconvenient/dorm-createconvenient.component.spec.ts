import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DormCreateconvenientComponent } from './dorm-createconvenient.component';

describe('DormCreateconvenientComponent', () => {
  let component: DormCreateconvenientComponent;
  let fixture: ComponentFixture<DormCreateconvenientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DormCreateconvenientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DormCreateconvenientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
