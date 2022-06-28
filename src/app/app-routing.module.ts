import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BinComponent } from './bin/bin.component';
import { LoginComponent } from './login/login.component';
import { NavAuthGuard } from './nav-auth.guard';
import { NotesFormComponent } from './notes-form/notes-form.component';


const routes: Routes = [
{ path: '', redirectTo: '/login', pathMatch: 'full' },
{path:'login',component:LoginComponent},
{path:'home',component:NotesFormComponent,canActivate:[NavAuthGuard]},
{path:'bin',component:BinComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
