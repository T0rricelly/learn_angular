import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploDataBinding } from './ejemplo-data-binding';

describe('EjemploDataBinding', () => {
  let component: EjemploDataBinding;
  let fixture: ComponentFixture<EjemploDataBinding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EjemploDataBinding],
    }).compileComponents();

    fixture = TestBed.createComponent(EjemploDataBinding);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
