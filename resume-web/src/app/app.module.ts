import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InjectionToken } from '@angular/core';
import { BREAKPOINTS, DEFAULT_BREAKPOINTS, BreakPoint, FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutModule, DialogModule, ComponentModule } from './shared';
import { AdminModule } from './admin';
import { environment } from '../environments/environment';
import { UserModule } from './user';

import * as icons from '@assets/icons.json';
import { IconProps } from './core/interfaces/icons';
import * as country from '@assets/country.json';
import { ICountry } from './core/interfaces/country';
import { BreakPointType } from './core/interfaces/breakpoints';
import { CoreModule } from './core';

const iconObj: IconProps = JSON.parse(JSON.stringify(icons));
const countryObj: ICountry = JSON.parse(JSON.stringify(country));
export const ICONS_TOKEN = new InjectionToken<IconProps>('icons token',
{
  providedIn: 'root',
  factory: () => (iconObj)
});
export const COUNTRY_TOKEN = new InjectionToken<ICountry>('country token',
{
  providedIn: 'root',
  factory: () => (countryObj)
});

function updateBreakpoints(bp: BreakPoint) {
  switch (bp.alias) {
    case 'sm':
      bp.mediaQuery = 'screen and (min-width: 600px) and (max-width: 1000px)';
      break;
    case 'md':
      bp.mediaQuery = 'screen and (min-width: 1001px) and (max-width: 1279px)';
      break;
    case 'lt-md':
      bp.mediaQuery = 'screen and (max-width: 1000px)';
      break;
    case 'gt-sm':
      bp.mediaQuery = 'screen and (min-width: 1001px)';
      break;
  }
  return bp;
}

export const APP_BREAK_POINT_OPTION: BreakPointType = {
  desktop: 1440,
  tablet: 1279,
  mobile: 1000,
  mobile2: 719
};

export const BREAK_POINT_OPTION_TOKEN = new InjectionToken<BreakPointType>('breakpoint token',
{
  providedIn: 'root',
  factory: () => (APP_BREAK_POINT_OPTION)
});


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    LayoutModule,
    ComponentModule,
    DialogModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AdminModule,
    UserModule,
    AppRoutingModule,
    FlexLayoutModule,
  ],
  providers: [
    { provide: 'API_BASE_URL', useValue: environment.apiBaseUrl },
    { provide: ICONS_TOKEN, useValue: iconObj },
    { provide: COUNTRY_TOKEN, useValue: countryObj },
    { provide: BREAK_POINT_OPTION_TOKEN, useValue: APP_BREAK_POINT_OPTION },
    {
      provide: BREAKPOINTS,
      useFactory: function customizeBreakPoints() {
        return DEFAULT_BREAKPOINTS.map(updateBreakpoints);
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
