import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { WindowTokenModule } from './core/windowToken.module';

import { Ng2PageScrollModule } from 'ng2-page-scroll';

import { ModalService } from './core/modal.service';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { ScalingTextDirective } from './app-header/scaling-text.directive';
import { NavigationComponent } from './app-header/navigation/navigation.component';
import { AppContentComponent } from './app-content/app-content.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { PortfolioItemComponent } from './app-content/portfolio-item/portfolio-item.component';
import { ModalComponent } from './core/modal/modal.component';
import { PromoModalComponent } from './app-content/promo-modal/promo-modal.component';
import { InterviewModalComponent } from './app-content/interview-modal/interview-modal.component';
import { ImageModalComponent } from './app-content/image-modal/image-modal.component';
import { MarketingModalComponent } from './app-content/marketing-modal/marketing-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    AppFooterComponent,
    AppHeaderComponent,
    AppContentComponent,
    ScalingTextDirective,
    NavigationComponent,
    PortfolioItemComponent,
    ModalComponent,
    PromoModalComponent,
    InterviewModalComponent,
    ImageModalComponent,
    MarketingModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    WindowTokenModule,
    Ng2PageScrollModule
  ],
  providers: [
    ModalService
  ],
  entryComponents: [
    PromoModalComponent,
    InterviewModalComponent,
    ImageModalComponent,
    MarketingModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
