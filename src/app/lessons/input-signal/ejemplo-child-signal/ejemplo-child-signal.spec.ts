import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploChildSignal } from './ejemplo-child-signal';

describe('EjemploChildSignal', () => {
  let component: EjemploChildSignal;
  let fixture: ComponentFixture<EjemploChildSignal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EjemploChildSignal],
    }).compileComponents();

    fixture = TestBed.createComponent(EjemploChildSignal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
