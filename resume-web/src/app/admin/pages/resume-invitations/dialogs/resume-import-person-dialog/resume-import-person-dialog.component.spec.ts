import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeImportPersonDialogComponent } from './resume-import-person-dialog.component';

describe('ResumeImportPersonDialogComponent', () => {
  let component: ResumeImportPersonDialogComponent;
  let fixture: ComponentFixture<ResumeImportPersonDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeImportPersonDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeImportPersonDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
