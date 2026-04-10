import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploFather } from './ejemplo-father';

describe('EjemploFather', () => {
  let component: EjemploFather;
  let fixture: ComponentFixture<EjemploFather>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EjemploFather],
    }).compileComponents();

    fixture = TestBed.createComponent(EjemploFather);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
