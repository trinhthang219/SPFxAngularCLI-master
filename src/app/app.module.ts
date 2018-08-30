
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {APP_BASE_HREF} from '@angular/common';
import { IWebPartContext} from '@microsoft/sp-webpart-base';
import { IPageContext } from '../utils/IPageContext';

declare const _spPageContextInfo: IPageContext;
var layoutsUrl:  string = (<any>window)._spPageContextInfo.serverRequestPath;
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue : layoutsUrl }],//'https://xsperamso365.sharepoint.com/sites/thangtrinh/' 
  entryComponents: [AppComponent]
})
export class AppModule {
  public context: IWebPartContext;
  constructor() {
  }
  // ngDoBootstrap() { }
  ngDoBootstrap(appRef: ApplicationRef) {
    const rootElements = document.querySelectorAll('app-root');
    for (const element of rootElements as any as HTMLElement[]) {
      appRef.bootstrap(AppComponent, element);
    }
    console.log(layoutsUrl);
  }
}
