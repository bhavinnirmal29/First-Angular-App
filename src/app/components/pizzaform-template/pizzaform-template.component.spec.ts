import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaformTemplateComponent } from './pizzaform-template.component';

describe('PizzaformTemplateComponent', () => {
  let component: PizzaformTemplateComponent;
  let fixture: ComponentFixture<PizzaformTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzaformTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaformTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
