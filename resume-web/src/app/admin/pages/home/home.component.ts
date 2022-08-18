import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../../../core/services/data.service';
import { takeUntil } from 'rxjs/operators';
import { from, Subject } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { ApiConfig } from '@app/core/models/Api';

@Component({
  selector: 'admin-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  products: any[] = [];
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private dataService: DataService<ApiConfig>) { }

  ngOnInit(): void {
    console.log('hom oninit');
    const observable$ = from(this.dataService.api.abpApiDefinitionList());
    observable$.subscribe(
      (next) => {
        console.log(next)
      },
      (err) => {
        console.error(err);
      }
    );
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    // Unsubscribe from the subject
    this.destroy$.unsubscribe();
  }
}
