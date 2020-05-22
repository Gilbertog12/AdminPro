import { NgModule } from "@angular/core";
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';
import { sharedModule } from '../shared/shared.module';
import { Pages_Routes } from './pages.routes';
import { FormsModule } from '@angular/forms'
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { ChartsModule } from 'ng2-charts';
import { GraficodonaComponent } from '../components/graficodona/graficodona.component';



@NgModule({
    declarations : [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementadorComponent,
        GraficodonaComponent
    ],
    exports:[
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementadorComponent
         
    ],
    imports : [
        sharedModule,
        Pages_Routes,
        FormsModule,
        ChartsModule,
    ]
})

export class PageModule{}