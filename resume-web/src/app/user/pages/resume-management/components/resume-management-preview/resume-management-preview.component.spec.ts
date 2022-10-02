import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeManagementPreviewComponent } from './resume-management-preview.component';

describe('ResumeManagementPreviewComponent', () => {
  let component: ResumeManagementPreviewComponent;
  let fixture: ComponentFixture<ResumeManagementPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeManagementPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeManagementPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
