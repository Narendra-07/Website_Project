import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScadaSystemComponent } from './scada-system.component';

describe('ScadaSystemComponent', () => {
  let component: ScadaSystemComponent;
  let fixture: ComponentFixture<ScadaSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScadaSystemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScadaSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
