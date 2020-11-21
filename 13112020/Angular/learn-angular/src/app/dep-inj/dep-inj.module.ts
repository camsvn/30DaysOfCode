import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { DepInjComponent } from './dep-inj.component';
import { HighlightStatusDirective } from './directives/highlight-status.directive'
import { AccountsService } from './services/accounts.service'
import { LoggingService } from './services/logging.service';

@NgModule({
  declarations: [AccountComponent, NewAccountComponent, DepInjComponent, HighlightStatusDirective],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports: [DepInjComponent],
  bootstrap: [DepInjComponent],
  providers: [AccountsService, LoggingService]
})
export class DepInjModule { }
