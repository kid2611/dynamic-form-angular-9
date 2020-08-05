import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMaterialDynamicComponent } from './form-material-dynamic.component';

describe('FormMaterialDynamicComponent', () => {
  let component: FormMaterialDynamicComponent;
  let fixture: ComponentFixture<FormMaterialDynamicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormMaterialDynamicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMaterialDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
