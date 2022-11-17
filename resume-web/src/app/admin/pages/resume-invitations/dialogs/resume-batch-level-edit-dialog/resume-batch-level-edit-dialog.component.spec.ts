import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeBatchLevelEditDialogComponent } from './resume-batch-level-edit-dialog.component';

describe('ResumeBatchLevelEditDialogComponent', () => {
  let component: ResumeBatchLevelEditDialogComponent;
  let fixture: ComponentFixture<ResumeBatchLevelEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeBatchLevelEditDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeBatchLevelEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
