import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCountryMobileComponent } from './input-country-mobile.component';

describe('InputCountryMobileComponent', () => {
  let component: InputCountryMobileComponent;
  let fixture: ComponentFixture<InputCountryMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputCountryMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputCountryMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
