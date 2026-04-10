import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploForObjetos } from './ejemplo-for-objetos';

describe('EjemploForObjetos', () => {
  let component: EjemploForObjetos;
  let fixture: ComponentFixture<EjemploForObjetos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EjemploForObjetos],
    }).compileComponents();

    fixture = TestBed.createComponent(EjemploForObjetos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
