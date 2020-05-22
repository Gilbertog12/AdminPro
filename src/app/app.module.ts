import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//rutas
import { app_routes } from './app.routes';

//modulos 


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { PageModule } from './pages/pages.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    
    
   
  ],
  imports: [
    BrowserModule,
    app_routes,
    PageModule ,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
