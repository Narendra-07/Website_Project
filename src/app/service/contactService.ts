import { HttpClient, HttpHeaders } from "@angular/common/http";
import { contact } from '../model/contactModel';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class ContactService {

    selectedUser: contact = {

        Mobile: '',
        email: '',
        Requirement: '',

    };   //object of model class

    constructor(public http: HttpClient) {

    }

    postUser(user: contact) {
        return "test";
        //return this.http.post(environment.apiBaseUrl + '/contact', user);//commented on 26052022 by nilesh
    }


}
