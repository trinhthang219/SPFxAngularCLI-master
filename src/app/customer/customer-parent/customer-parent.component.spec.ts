import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerParentComponent } from './customer-parent.component';

describe('AboutParentComponent', () => {
  let component: CustomerParentComponent;
  let fixture: ComponentFixture<CustomerParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
