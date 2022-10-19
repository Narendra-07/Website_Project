import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtToolsComponent } from './bt-tools.component';

describe('BtToolsComponent', () => {
  let component: BtToolsComponent;
  let fixture: ComponentFixture<BtToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtToolsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
