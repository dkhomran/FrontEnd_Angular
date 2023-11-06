import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPersonneComponent } from './pages/personne/add-personne/add-personne.component';
import {HttpClientModule} from "@angular/common/http";
import { ListPersonneComponent } from './pages/personne/list-personne/list-personne.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { NotFoudComponent } from './pages/not-found/not-foud.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UpdatePersonneComponent } from './pages/personne/update-personne/update-personne.component';


@NgModule({
  declarations: [
    AppComponent,
    AddPersonneComponent,
    ListPersonneComponent,
    HeaderComponent,
    FooterComponent,
    NotFoudComponent,
    DashboardComponent,
    UpdatePersonneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
