import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule,routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { NavHeaderComponent } from './nav-header/nav-header.component';
 import { FooterListComponent } from './footer-list/footer-list.component';
import { JoinNowComponent } from './join-now/join-now.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { StudentListComponent } from './student-list/student-list.component';
import { FooterList2Component } from './footer-list2/footer-list2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import {FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ProductSevicesComponent } from './product-sevices/product-sevices.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatDividerModule} from '@angular/material/divider';
import { IOTGatewayComponent } from './iot-gateway/iot-gateway.component';
import { IOTDashboardComponent } from './iot-dashboard/iot-dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Routes } from '@angular/router';
import { Industrial40Component } from './industrial40/industrial40.component';
import { MatGridListModule, MatGridTile } from '@angular/material/grid-list';
import { BtToolsComponent } from './bt-tools/bt-tools.component';
import { SpcDashboardComponent } from './spc-dashboard/spc-dashboard.component';
import { MachineMonitoringComponent } from './machine-monitoring/machine-monitoring.component';
import { PlcBasedAutomationComponent } from './plc-based-automation/plc-based-automation.component';
import { ScadaSystemComponent } from './scada-system/scada-system.component';
import { NilabViewComponent } from './nilab-view/nilab-view.component';
import { QtComponent } from './qt/qt.component';
import { VisionSystemComponent } from './vision-system/vision-system.component';
import { SpmComponent } from './spm/spm.component';
import { CustomDevelopmentComponent } from './custom-development/custom-development.component';
import { IotEmbeddedDeviceComponent } from './iot-embedded-device/iot-embedded-device.component';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {MatDialogModule} from '@angular/material/dialog';
import { FeedbackComponent } from './feedback/feedback.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';

const MaterialComponents=[MatButtonModule,MatButtonToggleModule,MatIconModule,MatCardModule,FlexLayoutModule]


//lazy module avoid to more bandwidth 
const routes:Routes=[
  {
    path:'home',
    loadChildren: () => import('./home/home.component').then(m=>m.HomeComponent)
  },
  // {
  //   path:'contactus',
  //   loadChildren: () => import('./contactus/contactus.component').then(m=>m.ContactusComponent)
  // },
  // {
  //   path:'vision-system',
  //   loadChildren: () => import('./vision-system/vision-system.component').then(m=>m.VisionSystemComponent)
  // },
]

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    NavHeaderComponent,
    JoinNowComponent,
    EmployeeListComponent,
    StudentListComponent,
    FooterList2Component,
    SlideShowComponent,
    ProductSevicesComponent,
    IOTGatewayComponent,
    IOTDashboardComponent,
    FooterListComponent,
    Industrial40Component,
    IOTGatewayComponent,
    IOTDashboardComponent,
    BtToolsComponent,
    SpcDashboardComponent,
    MachineMonitoringComponent,
    PlcBasedAutomationComponent,
    ScadaSystemComponent,
    NilabViewComponent,
    QtComponent,
    VisionSystemComponent,
    SpmComponent,
    CustomDevelopmentComponent,
    IotEmbeddedDeviceComponent,
    FeedbackComponent,
    FeedbackComponent,
    ContactInfoComponent
    
   /* BarChartComponent,   */
   
        
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
   MatCarouselModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    MatSidenavModule,
    MatToolbarModule,
    MatDividerModule,
    MatGridListModule,
    MatCardModule, 
   // MatGridTile,
    FlexLayoutModule,
    CarouselModule,
    MatDialogModule,
  /*  ChartsModule*/
      ],

      exports:[
    MatSidenavModule,
    MatCardModule,
     ],
     
providers: [],
bootstrap: [ AppComponent ]
})
export class AppModule {
 }