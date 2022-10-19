import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IotEmbeddedDeviceComponent } from './iot-embedded-device.component';

describe('IotEmbeddedDeviceComponent', () => {
  let component: IotEmbeddedDeviceComponent;
  let fixture: ComponentFixture<IotEmbeddedDeviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IotEmbeddedDeviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IotEmbeddedDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
