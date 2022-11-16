import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: "dashboard", component: DashboardComponent }
]

@NgModule({
  declarations: [	
    AppComponent,
    DashboardComponent,
   ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes,{useHash: false})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
