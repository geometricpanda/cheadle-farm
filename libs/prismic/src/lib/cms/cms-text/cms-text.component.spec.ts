import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmsRichTextComponent } from './cms-text.component';

describe('CmsTextComponent', () => {
  let component: CmsRichTextComponent;
  let fixture: ComponentFixture<CmsRichTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmsRichTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmsRichTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
