import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuvjerseyComponent } from './juvjersey.component';

describe('JuvjerseyComponent', () => {
  let component: JuvjerseyComponent;
  let fixture: ComponentFixture<JuvjerseyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuvjerseyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuvjerseyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
