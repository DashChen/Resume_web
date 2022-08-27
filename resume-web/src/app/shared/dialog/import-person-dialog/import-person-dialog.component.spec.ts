import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportPersonDialogComponent } from './import-person-dialog.component';

describe('ImportPersonDialogComponent', () => {
  let component: ImportPersonDialogComponent;
  let fixture: ComponentFixture<ImportPersonDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportPersonDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportPersonDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
