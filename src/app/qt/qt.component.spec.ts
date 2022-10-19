import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QtComponent } from './qt.component';

describe('QtComponent', () => {
  let component: QtComponent;
  let fixture: ComponentFixture<QtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
