import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisionSystemComponent } from './vision-system.component';

describe('VisionSystemComponent', () => {
  let component: VisionSystemComponent;
  let fixture: ComponentFixture<VisionSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisionSystemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisionSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
