import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinaljuegoComponent } from './finaljuego.component';

describe('FinaljuegoComponent', () => {
  let component: FinaljuegoComponent;
  let fixture: ComponentFixture<FinaljuegoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinaljuegoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinaljuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
