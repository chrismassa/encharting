import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnchartingComponent } from './encharting.component';

describe('EnchartingComponent', () => {
  let component: EnchartingComponent;
  let fixture: ComponentFixture<EnchartingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnchartingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnchartingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
