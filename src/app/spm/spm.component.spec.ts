import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpmComponent } from './spm.component';

describe('SpmComponent', () => {
  let component: SpmComponent;
  let fixture: ComponentFixture<SpmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
