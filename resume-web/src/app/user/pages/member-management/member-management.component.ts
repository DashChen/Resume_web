import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BaseComponent } from '@app/shared';
import { Actions as UserActions } from '@app/shared/store/user';
import { selectCurrentUser } from '@app/shared/store/user/user.selectors';
import { VoloAbpIdentityIdentityUserDto } from '@app/core/models/Api';

@Component({
  selector: 'app-member-management',
  templateUrl: './member-management.component.html',
  styleUrls: ['./member-management.component.scss']
})
export class MemberManagementComponent extends BaseComponent implements OnInit {
  currentUser$ = this.store.select(selectCurrentUser);
  user?: VoloAbpIdentityIdentityUserDto;
  isEdit: boolean = false;

  username: string = '';
  identityNo: string = '';
  birthday: string = '';
  phone: string = '';
  email: string = '';
  hasPwd: boolean = true;

  mfaGoogle: string = '';
  mfaLine: string = '';
  mfaFacebook: string = '';

  constructor(
    public store: Store,
  ) {
    super();
  }

  ngOnInit(): void {
    this.currentUser$.subscribe(user => {
      this.user = user;
    })
  }

  editMember(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isEdit = true;
  }

  boundMobile() {

  }

  boundEmail() {

  }

  changePwd() {
    
  }

  boundMFA(provider: string) {
    switch (provider) {
      case 'google':
        break;
      case 'line':
        break;
      case 'facebook':
        break;
    }
  }

  cancelEdit() {
    this.isEdit = false;
  }

  confirmEdit() {
    this.isEdit = false;
  }
}
