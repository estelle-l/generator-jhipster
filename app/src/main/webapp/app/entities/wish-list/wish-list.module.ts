import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QRCodeModule } from 'angular2-qrcode';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { AppSharedModule } from 'app/shared';
import {
  WishListComponent,
  WishListDetailComponent,
  WishListUpdateComponent,
  WishListDeletePopupComponent,
  WishListDeleteDialogComponent,
  wishListRoute,
  wishListPopupRoute
} from './';

const ENTITY_STATES = [...wishListRoute, ...wishListPopupRoute];

@NgModule({
  imports: [AppSharedModule, RouterModule.forChild(ENTITY_STATES), QRCodeModule],
  declarations: [
    WishListComponent,
    WishListDetailComponent,
    WishListUpdateComponent,
    WishListDeleteDialogComponent,
    WishListDeletePopupComponent
  ],
  entryComponents: [WishListComponent, WishListUpdateComponent, WishListDeleteDialogComponent, WishListDeletePopupComponent],
  providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppWishListModule {
  constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
    this.languageHelper.language.subscribe((languageKey: string) => {
      if (languageKey !== undefined) {
        this.languageService.changeLanguage(languageKey);
      }
    });
  }
}
