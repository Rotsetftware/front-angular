import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreplayComponent } from './preplay.component';

describe('PreplayComponent', () => {
  let component: PreplayComponent;
  let fixture: ComponentFixture<PreplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
