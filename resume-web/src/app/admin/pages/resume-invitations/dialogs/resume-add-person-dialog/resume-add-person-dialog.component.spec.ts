import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeAddPersonDialogComponent } from './resume-add-person-dialog.component';

describe('ResumeAddPersonDialogComponent', () => {
  let component: ResumeAddPersonDialogComponent;
  let fixture: ComponentFixture<ResumeAddPersonDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeAddPersonDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeAddPersonDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
