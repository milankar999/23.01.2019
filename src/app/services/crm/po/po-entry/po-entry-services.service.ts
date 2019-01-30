 
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';


//import to the interface datatypes

import  { PoEntryNewCustomer }from '../../../../interface/crm/po/po-entry/po-entry-new-customer'; 
import  { PoEntryCustomerTable }from '../../../../interface/crm/po/po-entry/po-entry-customer-table'; 
import {  PoEntryReceiver } from '../../../../interface/crm/po/po-entry/po-entry-receiver';


 

@Injectable({
  providedIn: 'root'
})
export class PoEntryServicesService {

  poEntryCustomer:PoEntryNewCustomer []=[];
  id;

  constructor(private http: HttpClient) { }

  //PoEntryCustomerSelection using GET method()...
  getPoEntryCustomerSelection():Observable<PoEntryNewCustomer[]>{
  return this.http.get<PoEntryNewCustomer[]>("/api/po_from_customer/customer_selection/", //PoEntryCustomerSelection database API LInk
   {
       headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))// send to header
    });       
}


  getPoEntryRequestorSelection(id):Observable<PoEntryCustomerTable[]>{
  return this.http.get<PoEntryCustomerTable[]>("/api/po_from_customer/customer/"+id+"/contact_person_selection/", //PoEntryRequestorSelection database API LInk
   {
       headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))// send to header
    });       
}

PostRequestorlist(name,mobileNo1,mobileNo2,email1,email2,id){
  return this.http.post<PoEntryCustomerTable>("/api/po_from_customer/customer/"+id+"/contact_person_selection/",//employee leave req database API Link
      {
       "name" : name,
       "mobileNo1" : mobileNo1,
       "mobileNo2" : mobileNo2,
       "email1" : email1,
       "email2" : email2
},{
    headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))// send to header Authorize
});

}
PostReciverlist(person_name,mobileNo1,mobileNo2,email1,email2,department_name,id,id1){
  return this.http.post<PoEntryReceiver>("api/po_from_customer/customer/"+id+"/contact_person/"+id1+"/delivery_contactperson_selection/",//employee leave req database API Link
      {
         "person_name" : person_name,
         "mobileNo1" : mobileNo1,
         "mobileNo2" : mobileNo2,
         "email1" : email1,
         "email2" : email2,
         "department_name":department_name,
},{
    headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))// send to header Authorize
});

}

}
