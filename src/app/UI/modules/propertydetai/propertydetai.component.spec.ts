import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertydetaiComponent } from './propertydetai.component';

describe('PropertydetaiComponent', () => {
  let component: PropertydetaiComponent;
  let fixture: ComponentFixture<PropertydetaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertydetaiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertydetaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
