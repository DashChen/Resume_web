import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { ResumeManagementService } from '..';

@Component({
  selector: 'app-resume-management',
  templateUrl: './resume-management.component.html',
  styleUrls: ['./resume-management.component.scss']
})
export class ResumeManagementComponent implements OnInit {

  showPreview!: boolean;

  showPreview$!: Subscription;

  constructor(
    private resumeManagementService: ResumeManagementService,
  ) { }

  ngOnInit(): void {
    this.resumeManagementService.updateShowPreview(false);
    this.showPreview$ = this.resumeManagementService.showPreview$.subscribe(value => {
      this.showPreview = value;
    });
  }

  ngOnDestroy(): void {
    this.showPreview$.unsubscribe();
  }

}
