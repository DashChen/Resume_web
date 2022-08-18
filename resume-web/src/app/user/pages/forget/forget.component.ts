import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FormErrorStateMatcher } from '@app/core';
import { basicDialog, IBasicDialog } from '@app/core/interfaces/basic-dialog';
import { CommonDialogComponent } from '@app/shared/dialog/common-dialog/common-dialog.component';


@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.scss']
})
export class ForgetComponent implements OnInit {
  title: string = '忘記密碼';
  subTitle: string = '請選擇手機或Email重新設定密碼';
  btnText: string = '發送驗證信件';

  tabSelected = new FormControl(0);

  selected = new FormControl('valid', [Validators.required, Validators.pattern('valid')]);

  selectFormControl = new FormControl('valid', [Validators.required, Validators.pattern('valid')]);

  nativeSelectFormControl = new FormControl('valid', [
    Validators.required,
    Validators.pattern('valid'),
  ]);

  matcher = new FormErrorStateMatcher();

  dialogConfig: IBasicDialog = {} as IBasicDialog;

  constructor(public dialog: MatDialog, public router: Router) { }

  ngOnInit(): void {
    this.dialogConfig = new basicDialog();
  }

  changeTab(index: number) {
    this.tabSelected.setValue(index);
    this.btnText = index == 0 ? '發送驗證信件' : '發送驗證訊息';
  }

  sendVerification() {
    this.dialogConfig.icon = 'success';
    this.dialogConfig.title = '信件發送成功';
    this.dialogConfig.subTitle = '信件已發送至信箱';
    this.dialogConfig.successBtnText = '返回登入畫面';

    const dialogRef = this.dialog.open(CommonDialogComponent, {
      height: '311px',
      width: '614px',
      data: this.dialogConfig
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.router.navigate(['/login']);
      }
    });
  }
}
