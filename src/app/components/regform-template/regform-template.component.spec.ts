import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegformTemplateComponent } from './regform-template.component';

describe('RegformTemplateComponent', () => {
  let component: RegformTemplateComponent;
  let fixture: ComponentFixture<RegformTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegformTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegformTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
