import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {  HomeComponent } from './home/home.component';
import { ProductsComponent} from './products/products.component';
import {ServicesComponent} from './services/services.component';
import { AboutusComponent} from './aboutus/aboutus.component';
import {ContactusComponent} from './contactus/contactus.component';
import { CarrersComponent} from './carrers/carrers.component'
import { JoinNowComponent } from './join-now/join-now.component';
import { Industrial40Component } from './industrial40/industrial40.component';
import { IOTGatewayComponent } from './iot-gateway/iot-gateway.component';
import { IOTDashboardComponent } from './iot-dashboard/iot-dashboard.component';
import { BtToolsComponent } from './bt-tools/bt-tools.component';
import { MachineMonitoringComponent } from './machine-monitoring/machine-monitoring.component';
import { ScadaSystemComponent } from './scada-system/scada-system.component';
import { NilabViewComponent } from './nilab-view/nilab-view.component';
import { QtComponent } from './qt/qt.component';
import { PlcBasedAutomationComponent } from './plc-based-automation/plc-based-automation.component';
import { VisionSystemComponent } from './vision-system/vision-system.component';
import { SpmComponent } from './spm/spm.component';
import { CustomDevelopmentComponent } from './custom-development/custom-development.component';
import { SpcDashboardComponent } from './spc-dashboard/spc-dashboard.component';
import { IotEmbeddedDeviceComponent } from './iot-embedded-device/iot-embedded-device.component';
import { InvalidListComponent } from './invalid-list/invalid-list.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { from } from 'rxjs';
import { ContactInfoComponent } from './contact-info/contact-info.component';

     // ----- routes 
const routes: Routes = [
// {path: '', pathMatch: 'full', component:HomeComponent},
{path:'home',component: HomeComponent},
{path:'products',component:ProductsComponent},
{path:'services',component:ServicesComponent},
{path:'aboutus',component: AboutusComponent},
// {path:'contactus',component:ContactusComponent},
{path:'contact-info',component:ContactInfoComponent},
{path:'carrers',component: CarrersComponent},
{path:'joinNow',component:JoinNowComponent},
{path:'industrial40',component:Industrial40Component},
{path:'iot-gateway',component:IOTGatewayComponent},
{path:'iot-dashboard',component:IOTDashboardComponent},
{path:'bt-tools',component:BtToolsComponent},
{path:'machine-monitoring',component:MachineMonitoringComponent},
{path:'scada-system',component:ScadaSystemComponent},
{path:'nilab-view',component:NilabViewComponent},
{path:'qt',component:QtComponent},
{path:'plc-based-automation',component:PlcBasedAutomationComponent},
{path:'vision-system',component:VisionSystemComponent},
{path:'spm',component:SpmComponent},
{path:'custom-development',component:CustomDevelopmentComponent},
{path:'spc-dashboard',component:SpcDashboardComponent},
{path:'iot-embedded-device',component:IotEmbeddedDeviceComponent},
{path: 'feedback', component:FeedbackComponent},
{path: '', pathMatch: 'full', component:HomeComponent},
{path: '**', pathMatch: 'full', component:InvalidListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[HomeComponent,ProductsComponent,ServicesComponent,AboutusComponent,ContactusComponent, CarrersComponent,JoinNowComponent,
  Industrial40Component,IOTDashboardComponent,BtToolsComponent,MachineMonitoringComponent,ScadaSystemComponent,NilabViewComponent,QtComponent,
  PlcBasedAutomationComponent,VisionSystemComponent,SpmComponent,CustomDevelopmentComponent,SpcDashboardComponent,IotEmbeddedDeviceComponent,
ContactInfoComponent,InvalidListComponent,FeedbackComponent]