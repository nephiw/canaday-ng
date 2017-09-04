import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoModalComponent } from './promo-modal.component';

describe('PromoModalComponent', () => {
  let component: PromoModalComponent;
  let fixture: ComponentFixture<PromoModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromoModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
