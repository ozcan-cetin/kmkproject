import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrunhavuzuComponent } from './urunhavuzu.component';

describe('UrunhavuzuComponent', () => {
  let component: UrunhavuzuComponent;
  let fixture: ComponentFixture<UrunhavuzuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrunhavuzuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UrunhavuzuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
