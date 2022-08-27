import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchLevelEditDialogComponent } from './batch-level-edit-dialog.component';

describe('BatchLevelEditDialogComponent', () => {
  let component: BatchLevelEditDialogComponent;
  let fixture: ComponentFixture<BatchLevelEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatchLevelEditDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchLevelEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
