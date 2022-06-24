import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BinComponent } from './bin/bin.component';
import { NotesFormComponent } from './notes-form/notes-form.component';


const routes: Routes = [
{ path: '', redirectTo: '/home', pathMatch: 'full' },
{path:'home',component:NotesFormComponent},
{path:'bin',component:BinComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
