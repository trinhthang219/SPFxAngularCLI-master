import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactPointComponent } from './contact-point.component';

describe('LazyParentComponent', () => {
  let component: ContactPointComponent;
  let fixture: ComponentFixture<ContactPointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactPointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
