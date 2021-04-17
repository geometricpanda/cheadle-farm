import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmsCardsComponent } from './cms-cards.component';

describe('CmsCardsComponent', () => {
  let component: CmsCardsComponent;
  let fixture: ComponentFixture<CmsCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmsCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
