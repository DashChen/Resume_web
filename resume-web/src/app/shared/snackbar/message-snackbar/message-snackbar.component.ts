import { Component, Inject } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-message-snackbar',
  templateUrl: './message-snackbar.component.html',
  styleUrls: ['./message-snackbar.component.scss']
})
export class MessageSnackbarComponent {

  constructor(
    public snackBarRef: MatSnackBarRef<MessageSnackbarComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: any) { }
}
