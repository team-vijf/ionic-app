import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloorComponent } from './floor.component';

describe('FloorComponent', () => {
  let component: FloorComponent;
  let fixture: ComponentFixture<FloorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloorComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
