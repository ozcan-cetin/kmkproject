import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaticiComponent } from './satici.component';

describe('SaticiComponent', () => {
  let component: SaticiComponent;
  let fixture: ComponentFixture<SaticiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaticiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaticiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
