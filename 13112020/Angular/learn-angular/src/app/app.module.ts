import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { HighlightDirective } from './directives/highlight.directive';

import { DepInjModule } from './dep-inj/dep-inj.module';
import { DepInjComponent } from './dep-inj/dep-inj.component';
import { PageNotFound404Component } from './page-not-found404/page-not-found404.component'

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    HighlightDirective,
    PageNotFound404Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DepInjModule, //feature module
    RouterModule.forRoot([
      {path: '', redirectTo:'/angular-basics', pathMatch:'full'},
      {path: 'angular-basics', component: ServersComponent},
      {path: 'directives', component: DepInjComponent},
      {path: '**', component: PageNotFound404Component}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
