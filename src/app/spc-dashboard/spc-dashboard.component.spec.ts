import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpcDashboardComponent } from './spc-dashboard.component';

describe('SpcDashboardComponent', () => {
  let component: SpcDashboardComponent;
  let fixture: ComponentFixture<SpcDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpcDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpcDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
