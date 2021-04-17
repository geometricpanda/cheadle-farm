import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCallComponent } from './header-call.component';

describe('HeaderCallComponent', () => {
  let component: HeaderCallComponent;
  let fixture: ComponentFixture<HeaderCallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderCallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
