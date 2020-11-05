import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjaxPostComponent } from './ajax-post.component';

describe('AjaxPostComponent', () => {
  let component: AjaxPostComponent;
  let fixture: ComponentFixture<AjaxPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjaxPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjaxPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
