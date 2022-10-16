import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ResumeBaseBasicsBaseBasicDto, ResumeShareCodesShareCodeDto, ResumeUserDatasUserDto } from '@app/core/models/Api';
import { Store } from '@ngrx/store';
import { Selectors as UserSelectors } from '@app/shared/store/user';
import { Actions as RouterActions } from '@app/shared/store/router';
import { Selectors as CommonSelectors } from '@app/shared/store/common';
import { BaseComponent } from '@app/shared';

@Component({
  selector: 'app-resume-management-preview',
  templateUrl: './resume-management-preview.component.html',
  styleUrls: ['./resume-management-preview.component.scss']
})
export class ResumeManagementPreviewComponent extends BaseComponent implements OnInit {
  title: string = '';
  user: ResumeBaseBasicsBaseBasicDto = {} as ResumeBaseBasicsBaseBasicDto;

  sexList: ResumeShareCodesShareCodeDto[] | null = null;

  constructor(
    public override store: Store,
    public override dialog: MatDialog,
  ) {
    super(store, dialog);
    this.store.select(UserSelectors.selectResumeTitle)
      .subscribe(res => {
        this.title = res;
      });
    this.store.select(UserSelectors.selectResumeBasicInfo)
      .subscribe(res => {
        this.user = res;
      });
    this.store.select(CommonSelectors.selectSexList)
      .subscribe(res => {
        this.sexList = res;
      });
  }

  ngOnInit(): void {
  }

  goToEdit() {
    this.store.dispatch(RouterActions.Go({ path: ['resume-management']}));
  }

  onImgError(event: Event): void {
    (event.target as HTMLImageElement).src = '/assets/icons/user-pic-icon.svg';
  }
}
