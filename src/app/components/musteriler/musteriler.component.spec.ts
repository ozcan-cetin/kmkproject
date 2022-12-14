import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusterilerComponent } from './musteriler.component';

describe('MusterilerComponent', () => {
  let component: MusterilerComponent;
  let fixture: ComponentFixture<MusterilerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusterilerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusterilerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
