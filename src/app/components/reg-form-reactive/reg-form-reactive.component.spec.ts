import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegFormReactiveComponent } from './reg-form-reactive.component';

describe('RegFormReactiveComponent', () => {
  let component: RegFormReactiveComponent;
  let fixture: ComponentFixture<RegFormReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegFormReactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegFormReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
