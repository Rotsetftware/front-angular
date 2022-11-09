import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JugandoComponent } from './jugando.component';

describe('JugandoComponent', () => {
  let component: JugandoComponent;
  let fixture: ComponentFixture<JugandoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JugandoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JugandoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
