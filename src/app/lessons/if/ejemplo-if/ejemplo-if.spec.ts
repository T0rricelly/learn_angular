import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploIf } from './ejemplo-if';

describe('EjemploIf', () => {
  let component: EjemploIf;
  let fixture: ComponentFixture<EjemploIf>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EjemploIf],
    }).compileComponents();

    fixture = TestBed.createComponent(EjemploIf);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
