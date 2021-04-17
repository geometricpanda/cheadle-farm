import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmsTilesComponent } from './cms-tiles.component';

describe('CmsTilesComponent', () => {
  let component: CmsTilesComponent;
  let fixture: ComponentFixture<CmsTilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmsTilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmsTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
