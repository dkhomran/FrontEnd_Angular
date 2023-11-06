

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddPersonneComponent} from "./pages/personne/add-personne/add-personne.component";
import {ListPersonneComponent} from "./pages/personne/list-personne/list-personne.component";
import { NotFoudComponent } from './pages/not-found/not-foud.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import {UpdatePersonneComponent} from "./pages/personne/update-personne/update-personne.component";

const routes: Routes = [
  { path: '' , component: DashboardComponent},
  { path: 'personne/list', component: ListPersonneComponent },
  { path: 'personne/add', component: AddPersonneComponent },
  { path: 'personne/update/:id', component: UpdatePersonneComponent },

  { path: '**', component: NotFoudComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
