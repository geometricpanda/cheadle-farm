import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmsCollectionComponent } from './cms-collection.component';

describe('CmsCollectionComponent', () => {
  let component: CmsCollectionComponent;
  let fixture: ComponentFixture<CmsCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmsCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmsCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
