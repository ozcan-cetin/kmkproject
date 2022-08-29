import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SistemayarlariComponent } from './sistemayarlari.component';

describe('SistemayarlariComponent', () => {
  let component: SistemayarlariComponent;
  let fixture: ComponentFixture<SistemayarlariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SistemayarlariComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SistemayarlariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
