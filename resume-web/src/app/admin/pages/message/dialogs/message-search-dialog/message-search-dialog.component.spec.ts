import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageSearchDialogComponent } from './message-search-dialog.component';

describe('MessageSearchDialogComponent', () => {
  let component: MessageSearchDialogComponent;
  let fixture: ComponentFixture<MessageSearchDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageSearchDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageSearchDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
