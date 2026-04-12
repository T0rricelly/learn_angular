import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleViewChild } from './example-view-child';

describe('ExampleViewChild', () => {
  let component: ExampleViewChild;
  let fixture: ComponentFixture<ExampleViewChild>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExampleViewChild],
    }).compileComponents();

    fixture = TestBed.createComponent(ExampleViewChild);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
