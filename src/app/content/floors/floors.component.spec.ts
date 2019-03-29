import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloorsComponent } from './floors.component';

describe('FloorsComponent', () => {
  let component: FloorsComponent;
  let fixture: ComponentFixture<FloorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloorsComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
