import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploFor } from './ejemplo-for';

describe('EjemploFor', () => {
  let component: EjemploFor;
  let fixture: ComponentFixture<EjemploFor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EjemploFor],
    }).compileComponents();

    fixture = TestBed.createComponent(EjemploFor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
