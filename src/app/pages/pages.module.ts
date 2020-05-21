import { NgModule } from "@angular/core";
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';
import { sharedModule } from '../shared/shared.module';
import { Pages_Routes } from './pages.routes';



@NgModule({
    declarations : [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
    ],
    exports:[
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
         
    ],
    imports : [
        sharedModule,
        Pages_Routes
    ]
})

export class PageModule{}