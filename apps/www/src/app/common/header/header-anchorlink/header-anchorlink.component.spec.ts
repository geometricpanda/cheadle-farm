import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAnchorlinkComponent } from './header-anchorlink.component';

describe('HeaderAnchorlinkComponent', () => {
  let component: HeaderAnchorlinkComponent;
  let fixture: ComponentFixture<HeaderAnchorlinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderAnchorlinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderAnchorlinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
