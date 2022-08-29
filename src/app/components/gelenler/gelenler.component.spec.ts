import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GelenlerComponent } from './gelenler.component';

describe('GelenlerComponent', () => {
  let component: GelenlerComponent;
  let fixture: ComponentFixture<GelenlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GelenlerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GelenlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
