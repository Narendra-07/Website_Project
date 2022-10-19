
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactService } from '../service/contactService';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css'],
})


export class ContactusComponent implements OnInit {
  isValidated = false;

  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  mobileNoPattern = /^((\\+91-?)|0)?[0-9]{10}$/;
  showSucessMessages: boolean | undefined;
  serverErrorMessages: string | undefined;

  constructor(public contactService: ContactService)
   {

  }

  onSubmit(form: NgForm) {
    console.log("in user ", form.value)
    console.log("in User Info component");
    // this.contactService.postUser(form.value).subscribe(
    //   res => {
    //     this.showSucessMessages = true;
    //     setTimeout(() => this.showSucessMessages = false, 4000);
    //     this.resetForm(form);
    //   },
    //   err => {
    //     console.log("error 422");
    //     if (err.status === 422) {
    //       this.serverErrorMessages = err.error.join('<br/>');
    //     }
    //     else
    //       console.log("error ");
    //     this.serverErrorMessages = 'Something went wrong.Please contact admin.';
    //   }
    // );
  }

  resetForm(form: NgForm) {
    this.contactService.selectedUser = {
      Mobile: '',
      email: '',
      Requirement: '',

    };
    form.resetForm();
    this.serverErrorMessages = '';
  }

  ngOnInit(): void {

  }
}



