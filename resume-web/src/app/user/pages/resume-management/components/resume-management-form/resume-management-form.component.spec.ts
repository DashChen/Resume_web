import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeManagementFormComponent } from './resume-management-form.component';

describe('ResumeManagementFormComponent', () => {
  let component: ResumeManagementFormComponent;
  let fixture: ComponentFixture<ResumeManagementFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeManagementFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeManagementFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
