import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserShowreserComponent } from './user-showreser.component';

describe('UserShowreserComponent', () => {
  let component: UserShowreserComponent;
  let fixture: ComponentFixture<UserShowreserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserShowreserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserShowreserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
