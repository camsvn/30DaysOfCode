import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { HighlightDirective } from './directives/highlight.directive';

// import { DepInjModule } from './dep-inj/dep-inj.module';
// import { DepInjComponent } from './dep-inj/dep-inj.component';
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
    // DepInjModule, //feature module
    RouterModule.forRoot([
      {path: 'angular-basics', component: ServersComponent, data:{title: 'Angular Basics'}},
      // {path: 'dep-inj', component: DepInjComponent, data:{title: 'Dependency Injection'}},
      {path: 'dep-inj', loadChildren: () => import ('./dep-inj/dep-inj.module').then(m => m.DepInjModule), data:{title: 'Dependency Injection'}},
      {path: '', redirectTo:'/angular-basics', pathMatch:'full'},
      {path: '**', component: PageNotFound404Component, data:{title: '404'}}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
