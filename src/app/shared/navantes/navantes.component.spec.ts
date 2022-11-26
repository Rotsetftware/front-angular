import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavantesComponent } from './navantes.component';

describe('NavantesComponent', () => {
  let component: NavantesComponent;
  let fixture: ComponentFixture<NavantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavantesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
