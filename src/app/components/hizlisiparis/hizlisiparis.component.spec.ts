import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HizlisiparisComponent } from './hizlisiparis.component';

describe('HizlisiparisComponent', () => {
  let component: HizlisiparisComponent;
  let fixture: ComponentFixture<HizlisiparisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HizlisiparisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HizlisiparisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
