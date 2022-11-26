import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavjuegoComponent } from './navjuego.component';

describe('NavjuegoComponent', () => {
  let component: NavjuegoComponent;
  let fixture: ComponentFixture<NavjuegoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavjuegoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavjuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
