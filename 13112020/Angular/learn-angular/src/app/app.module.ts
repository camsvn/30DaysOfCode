import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { HighlightDirective } from './directives/highlight.directive';

import { DepInjModule } from './dep-inj/dep-inj.module'

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    HighlightDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DepInjModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
