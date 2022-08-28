import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AliciComponent } from './alici.component';

describe('AliciComponent', () => {
  let component: AliciComponent;
  let fixture: ComponentFixture<AliciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AliciComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AliciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
