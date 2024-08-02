import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reto12Component } from './reto12.component';

describe('Reto12Component', () => {
  let component: Reto12Component;
  let fixture: ComponentFixture<Reto12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Reto12Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Reto12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
