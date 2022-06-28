import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule} from '@angular/common/http';
import { JwtHelperService, JWT_OPTIONS  } from '@auth0/angular-jwt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotesFormComponent } from './notes-form/notes-form.component';
import { CardComponent } from './card/card.component';
import { BinComponent } from './bin/bin.component';
import { BinCardComponent } from './bin-card/bin-card.component';
import { LoginComponent } from './login/login.component';
import { NavAuthGuard } from './nav-auth.guard';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NotesFormComponent,
    CardComponent,
    BinComponent,
    BinCardComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule   
  ],
  

  providers: [NavAuthGuard,{ provide: JWT_OPTIONS, useValue: JWT_OPTIONS }, JwtHelperService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
