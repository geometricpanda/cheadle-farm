import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CowLogoComponent } from './cow-logo.component';

describe('CowLogoComponent', () => {
  let component: CowLogoComponent;
  let fixture: ComponentFixture<CowLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CowLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CowLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
