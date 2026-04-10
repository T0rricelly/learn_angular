import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploChildOutput } from './ejemplo-child-output';

describe('EjemploChildOutput', () => {
  let component: EjemploChildOutput;
  let fixture: ComponentFixture<EjemploChildOutput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EjemploChildOutput],
    }).compileComponents();

    fixture = TestBed.createComponent(EjemploChildOutput);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
