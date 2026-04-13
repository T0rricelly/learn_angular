import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorExample } from './calculator-example';

describe('CalculatorExample', () => {
  let component: CalculatorExample;
  let fixture: ComponentFixture<CalculatorExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculatorExample],
    }).compileComponents();

    fixture = TestBed.createComponent(CalculatorExample);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
