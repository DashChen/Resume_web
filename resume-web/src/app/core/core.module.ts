import { APP_INITIALIZER, NgModule, Optional, SkipSelf } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { AppService, DataService, ResizeService  } from './services';
import { CookieService } from './services/cookie.service';

/** Error when invalid control is dirty, touched, or submitted. */
export class FormErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@NgModule({
  imports: [
  ],
  providers: [
    {
      multi: true,
      provide: APP_INITIALIZER,
      useFactory: function initializeRoutes(appService: AppService) {
        return () => appService.ngOnAppInit();
      },
      deps: [AppService]
    },
    CookieService,
    DataService,
    ResizeService,
  ],
  declarations: [],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() core:CoreModule ){
    if (core) {
        throw new Error("You should import core module only in the root module")
    }
  }
}