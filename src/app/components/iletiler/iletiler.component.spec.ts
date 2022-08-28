import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IletilerComponent } from './iletiler.component';

describe('IletilerComponent', () => {
  let component: IletilerComponent;
  let fixture: ComponentFixture<IletilerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IletilerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IletilerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
