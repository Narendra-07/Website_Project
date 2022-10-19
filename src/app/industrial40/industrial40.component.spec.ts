import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Industrial40Component } from './industrial40.component';

describe('Industrial40Component', () => {
  let component: Industrial40Component;
  let fixture: ComponentFixture<Industrial40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Industrial40Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Industrial40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
