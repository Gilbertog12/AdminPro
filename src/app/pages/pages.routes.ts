import { RouterModule,Routes } from "@angular/router";
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';



 

const PagesRoutes : Routes = [

    {
        path: '' ,
         component:PagesComponent,
        children:[

            { path: 'dashboard' , component:DashboardComponent },
            { path:'progress', component: ProgressComponent },
            { path:'Grafica', component: Graficas1Component },
            { path:'account-settings', component: AccountSettingsComponent },
            { path:'', redirectTo: '/dashboard' , pathMatch: 'full'},

        ] 
    },

];

export const Pages_Routes = RouterModule.forChild( PagesRoutes);