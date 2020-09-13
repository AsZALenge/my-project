import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DormShowconvenComponent } from './dorm-showconven.component';

describe('DormShowconvenComponent', () => {
  let component: DormShowconvenComponent;
  let fixture: ComponentFixture<DormShowconvenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DormShowconvenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DormShowconvenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
