import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-machine-monitoring',
  templateUrl: './machine-monitoring.component.html',
  styleUrls: ['./machine-monitoring.component.css']
})
export class MachineMonitoringComponent {

  parentArray:any=[
    {
     imgName:"./assets/Industrial 4.0.jpg",
    data:'  Industrial 4.0',
    cols: 1, rows:1 ,border:"none",
    buttonText: 'view'
   }, 
    {
      imgName:"./assets/IoT gateway.png",
     data:'  IoT Gateways',
     cols: 1, rows: 1 ,border:"none",
     buttonText: 'view'
     },
    {
      imgName:"./assets/IoT dashboard.jpg",
      data:'  IoT Dashboard',
      cols: 1, rows: 1 ,border:"none",
      buttonText: 'view'
     },
     {
       imgName:"./assets/BItools.png",
       data:'BI Tools',
       cols: 1, rows: 1 ,border:"none",
       buttonText: 'view'
     },
    {
      imgName:"./assets/SPC dashboard.png",     
      data:'SPC Dashboard',
      cols: 1, rows: 1 ,border:"none",
      buttonText: 'view'
     },
    {
     imgName:"./assets/Machine monitoring.png",
     data:'  Machine Monitoring',
     cols: 1, rows: 1 ,border:"none",
     buttonText: 'view'
   },
    {
      imgName:"./assets/SCADA system.png",
     data:'PC Based Automation Solutions',
     cols: 1, rows: 1 ,border:"none",
     buttonText: 'view'
     },
    {
      imgName:"./assets/NI LabVIEW.png",
      data:'NI LabVIEW',
      cols: 1, rows: 1 ,border:"none",
      buttonText: 'view'
    },
    {
      imgName:"./assets/QT.PNG",
      data:'QT',
      cols: 1, rows: 1 ,border:"none",
      buttonText: 'view'
    },
    
   ]
 
   CustomOptions1: OwlOptions = {
    
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    items:1,      //select item number
    center:true,
    margin:30,
    autoplay:false,            //slide
    dotsSpeed:false,            //pagination speed
    autoplayHoverPause:true,    //Pause on mouse hover.
    navText:['',''],//"<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"
    navSpeed:false,
    slideBy:1,
    dots: true,
    dotsEach:true,    
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      1300: {
        items: 4
      },
    },
    nav: true
  }
  customOptions11: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 600,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1 
      },
      400: {
        items: 2
      },
      760: {
        items: 3
      },
      1000: {
        items: 4
      }
    },
    nav: true
  }

}