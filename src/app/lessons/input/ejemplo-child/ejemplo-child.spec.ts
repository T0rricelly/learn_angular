import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploChild } from './ejemplo-child';

describe('EjemploChild', () => {
  let component: EjemploChild;
  let fixture: ComponentFixture<EjemploChild>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EjemploChild],
    }).compileComponents();

    fixture = TestBed.createComponent(EjemploChild);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
