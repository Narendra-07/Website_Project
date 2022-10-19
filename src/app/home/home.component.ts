import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


export interface Tile {
  cols: number;
  rows: number;
  text: string;
  border: string;
  name:string;
 }

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent {
  slides = [
    {'image': './assets/BItools.png'}, 
    {'image': './assets/Camera Vision System.png'}, 
    {'image': './assets/Embedded design.png'}, 
    {'image': './assets/Industrial 4.0.jpg'},
    {'image': './assets/IoT gateway.png'},
    {'image': './assets/Machine monitoring.png'} ,        
    {'image': './assets/NI LabVIEW.png'} , 
    {'image': './assets/QT.PNG'} , 
    {'image': './assets/SCADA system.png'} , 
    {'image': './assets/SPC dashboard.png'} , 
    {'image': './assets/SPM.jpg'} , 
  ];
 

  parentArray:any=[
   {
    imgName:"./assets/Industrial 4.0.jpg",
   data:'  Industrial 4.0',
   cols: 1, rows:1 ,border:"none",
   buttonText: 'Show more'
  }, 
   {
     imgName:"./assets/IoT gateway.png",
    data:'  IoT Gateways',
    cols: 1, rows: 1 ,border:"none",
    buttonText: 'Show more'
    },
   {
     imgName:"./assets/IoT dashboard.jpg",
     data:'  IoT Dashboard',
     cols: 1, rows: 1 ,border:"none",
     buttonText: 'Show more'
    },
    {
      imgName:"./assets/BItools.png",
      data:'BI Tools',
      cols: 1, rows: 1 ,border:"none",
      buttonText: 'Show more'
    },
   {
     imgName:"./assets/SPC dashboard.png",     
     data:'SPC Dashboard',
     cols: 1, rows: 1 ,border:"none",
     buttonText: 'Show more'
    },
   {
    imgName:"./assets/Machine monitoring.png",
    data:'  Machine Monitoring',
    cols: 1, rows: 1 ,border:"none",
    buttonText: 'Show more'
  },
   {
     imgName:"./assets/SCADA system.png",
    data:'PC Based Automation Solutions',
    cols: 1, rows: 1 ,border:"none",
    buttonText: 'Show more'
    },
   {
     imgName:"./assets/NI LabVIEW.png",
     data:'NI LabVIEW',
     cols: 1, rows: 1 ,border:"none",
     buttonText: 'Show more'
   },
   {
     imgName:"./assets/QT.PNG",
     data:'QT',
     cols: 1, rows: 1 ,border:"none",
     buttonText: 'Show more'
   },
   
  ]

  customOptions: OwlOptions = {
    
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
      300: {
        items: 1
      },
      700: {
        items: 2
      },
      900: {
        items: 3
      },
      
    },
    nav: true
  }


  clientArray:any= [   
    {
      imagName:"https://www.tatamotors.com/wp-content/themes/tatamotors_2019/images/tata_logo.png",
     
    },
    {
      imagName:"https://th.bing.com/th/id/R.c42a2feb87b9da12aebbd66fa419a77d?rik=dUxyGWFV7kVvzA&riu=http%3a%2f%2flogos-download.com%2fwp-content%2fuploads%2f2016%2f04%2fMahindra_Rise_logo_logotype.png&ehk=Byyr9agMBm9%2bDkmDh%2fnPuzCm0tMYbnfZusn06JI1j3M%3d&risl=&pid=ImgRaw&r=0",
    },

    {
      imagName:"https://www.un-zero-un.fr/media/cache/project_page_content_width/uploads/concept_iton/iton___logo_marque-588b0ef1d6d96.png",
    },
    {
      imagName:"https://th.bing.com/th/id/OIP.jOaSaaJkWIg_zbxuAH-5yAHaE5?w=264&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
    }
    ]

 clientOptions: OwlOptions = {
  loop: true,
  mouseDrag: false,
  touchDrag: false,
  pullDrag: false,
  dots: false,
  navSpeed: 1200,
  navText: ['&#8249', '&#8250;'],
  items:1,      //select item number
  center:true,
  margin:10,
 autoplay:true,            //slide
 dotsSpeed:false,            //pagination speed
 autoplayHoverPause:true,    //Pause on mouse hover.
 slideBy:1,
dotsEach:true,    
  responsive: {
    0: {
      items: 1
    },
    300: {
      items: 1
    },
    650: {
      items: 2
    },
    900: {
      items: 3
    },
    // 1100: {
    //   items: 4
    // },  
  },
  nav: true
 }
}
