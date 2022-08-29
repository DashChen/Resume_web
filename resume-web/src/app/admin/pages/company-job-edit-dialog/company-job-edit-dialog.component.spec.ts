import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyJobEditDialogComponent } from './company-job-edit-dialog.component';

describe('CompanyJobEditDialogComponent', () => {
  let component: CompanyJobEditDialogComponent;
  let fixture: ComponentFixture<CompanyJobEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyJobEditDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyJobEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
