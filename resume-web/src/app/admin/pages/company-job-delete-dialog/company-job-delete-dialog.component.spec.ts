import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyJobDeleteDialogComponent } from './company-job-delete-dialog.component';

describe('CompanyJobDeleteDialogComponent', () => {
  let component: CompanyJobDeleteDialogComponent;
  let fixture: ComponentFixture<CompanyJobDeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyJobDeleteDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyJobDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
