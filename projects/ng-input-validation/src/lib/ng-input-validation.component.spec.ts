import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgInputValidationComponent } from './ng-input-validation.component';

describe('NgInputValidationComponent', () => {
  let component: NgInputValidationComponent;
  let fixture: ComponentFixture<NgInputValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgInputValidationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgInputValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
