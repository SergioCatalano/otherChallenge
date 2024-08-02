import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reto06Component } from './reto06.component';

describe('Reto06Component', () => {
  let component: Reto06Component;
  let fixture: ComponentFixture<Reto06Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Reto06Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Reto06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
