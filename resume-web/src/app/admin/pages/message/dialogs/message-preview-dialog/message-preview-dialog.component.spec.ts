import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagePreviewDialogComponent } from './message-preview-dialog.component';

describe('MessagePreviewDialogComponent', () => {
  let component: MessagePreviewDialogComponent;
  let fixture: ComponentFixture<MessagePreviewDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessagePreviewDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagePreviewDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
