import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenancechartComponent } from './maintenancechart.component';

describe('MaintenancechartComponent', () => {
  let component: MaintenancechartComponent;
  let fixture: ComponentFixture<MaintenancechartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaintenancechartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaintenancechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
