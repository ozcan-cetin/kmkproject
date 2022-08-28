import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaylaskazanComponent } from './paylaskazan.component';

describe('PaylaskazanComponent', () => {
  let component: PaylaskazanComponent;
  let fixture: ComponentFixture<PaylaskazanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaylaskazanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaylaskazanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
