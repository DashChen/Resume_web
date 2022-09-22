import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyJobAddDialogComponent } from './company-job-add-dialog.component';

describe('CompanyJobAddDialogComponent', () => {
  let component: CompanyJobAddDialogComponent;
  let fixture: ComponentFixture<CompanyJobAddDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyJobAddDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyJobAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
