import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerChildComponent } from './customer-child.component';

describe('AboutChildComponent', () => {
  let component: CustomerChildComponent;
  let fixture: ComponentFixture<CustomerChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
