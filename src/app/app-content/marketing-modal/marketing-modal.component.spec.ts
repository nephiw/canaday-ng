import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingModalComponent } from './marketing-modal.component';

describe('MarketingModalComponent', () => {
  let component: MarketingModalComponent;
  let fixture: ComponentFixture<MarketingModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketingModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
