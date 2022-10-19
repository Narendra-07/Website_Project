import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlcBasedAutomationComponent } from './plc-based-automation.component';

describe('PlcBasedAutomationComponent', () => {
  let component: PlcBasedAutomationComponent;
  let fixture: ComponentFixture<PlcBasedAutomationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlcBasedAutomationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlcBasedAutomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
