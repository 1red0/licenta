import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilagechartComponent } from './milagechart.component';

describe('MilagechartComponent', () => {
  let component: MilagechartComponent;
  let fixture: ComponentFixture<MilagechartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MilagechartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MilagechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
