import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploFatherOutput } from './ejemplo-father-output';

describe('EjemploFatherOutput', () => {
  let component: EjemploFatherOutput;
  let fixture: ComponentFixture<EjemploFatherOutput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EjemploFatherOutput],
    }).compileComponents();

    fixture = TestBed.createComponent(EjemploFatherOutput);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
