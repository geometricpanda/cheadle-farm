import { async, TestBed } from '@angular/core/testing';
import { GoogleMapsModule } from './google-maps.module';

describe('GoogleMapsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [GoogleMapsModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(GoogleMapsModule).toBeDefined();
  });
});
