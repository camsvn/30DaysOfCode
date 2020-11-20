import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { DepInjComponent } from './dep-inj.component';
// import { HighlightStatusDirective } from './directives/highlight-status.directive';



@NgModule({
  declarations: [AccountComponent, NewAccountComponent, DepInjComponent],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports: [DepInjComponent],
  bootstrap: [DepInjComponent]
})
export class DepInjModule { }
