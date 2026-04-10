import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploFatherSignal } from './ejemplo-father-signal';

describe('EjemploFatherSignal', () => {
  let component: EjemploFatherSignal;
  let fixture: ComponentFixture<EjemploFatherSignal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EjemploFatherSignal],
    }).compileComponents();

    fixture = TestBed.createComponent(EjemploFatherSignal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
