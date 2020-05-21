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



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    
   
  ],
  imports: [
    BrowserModule,
    app_routes,
    PageModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
