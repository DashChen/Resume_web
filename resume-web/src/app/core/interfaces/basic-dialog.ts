import { MatDialogConfig } from "@angular/material/dialog";

export interface IBasicDialog extends MatDialogConfig {
    icon?: string;
    title?: string;
    subTitle?: string;
    showSuccessBtn?: boolean;
    successBtnText?: string;
    showCancelBtn?: boolean;
    cancelBtnText?: string;
}

export class basicDialog implements IBasicDialog {
    icon?: string | undefined;
    title?: string = '';
    subTitle?: string = '';
    showSuccessBtn?: boolean = true;
    successBtnText?: string = '確認';
    showCancelBtn?: boolean = false;
    cancelBtnText?: string = '取消';

    constructor(init?: basicDialog) {
        if (init) {
            Object.assign(this, init);
        }
    }
}