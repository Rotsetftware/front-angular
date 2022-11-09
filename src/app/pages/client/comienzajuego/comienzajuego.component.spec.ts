import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComienzajuegoComponent } from './comienzajuego.component';

describe('ComienzajuegoComponent', () => {
  let component: ComienzajuegoComponent;
  let fixture: ComponentFixture<ComienzajuegoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComienzajuegoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComienzajuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
