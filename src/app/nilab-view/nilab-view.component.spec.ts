import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NilabViewComponent } from './nilab-view.component';

describe('NilabViewComponent', () => {
  let component: NilabViewComponent;
  let fixture: ComponentFixture<NilabViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NilabViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NilabViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
