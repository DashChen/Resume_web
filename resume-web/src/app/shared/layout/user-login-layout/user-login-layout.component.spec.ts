import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLoginLayoutComponent } from './user-login-layout.component';

describe('UserLoginLayoutComponent', () => {
  let component: UserLoginLayoutComponent;
  let fixture: ComponentFixture<UserLoginLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserLoginLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLoginLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
