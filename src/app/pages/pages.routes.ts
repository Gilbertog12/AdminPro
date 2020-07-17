import { RouterModule,Routes } from "@angular/router";
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { LoginGuardGuard } from '../services/service.index';



 

const PagesRoutes : Routes = [

    {
        path: '' ,
         component:PagesComponent,
         canActivate:[ LoginGuardGuard],
        children:[

            { path: 'dashboard' , component:DashboardComponent, data:{ titulo:'Dashboard'} },
            { path:'progress', component: ProgressComponent , data:{ titulo:'Progreso'}},
            { path:'Grafica', component: Graficas1Component, data:{ titulo:'Graficas'} },
            { path:'promesas', component: PromesasComponent , data:{ titulo:'Promesas'}},
            { path:'rxjs', component: RxjsComponent, data:{ titulo:'Rxjs'} },
            { path:'account-settings', component: AccountSettingsComponent, data:{ titulo:'Ajsutes Del Tema'} },
            { path:'', redirectTo: '/dashboard' , pathMatch: 'full'},

        ] 
    },

];

export const Pages_Routes = RouterModule.forChild( PagesRoutes);