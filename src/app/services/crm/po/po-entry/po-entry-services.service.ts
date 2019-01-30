 
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';


//import to the interface datatypes

import  { PoEntryNewCustomer }from '../../../../interface/crm/po/po-entry/po-entry-new-customer'; 
import  { PoEntryCustomerTable }from '../../../../interface/crm/po/po-entry/po-entry-customer-table'; 
import  {PoEntryReciver }from '../../../../interface/crm/po/po-entry/po-entry-reciver';
import  {SupportingInfo} from '../../../../interface/crm/po/po-entry/supporting-info'

 

@Injectable({
  providedIn: 'root'
})
export class PoEntryServicesService {

  poEntryCustomer:PoEntryNewCustomer []=[];
  id;
   reciverselectionlist:PoEntryReciver[]=[];

   supportinfolist:SupportingInfo[]=[];

  constructor(private http: HttpClient) { }

  //PoEntryCustomerSelection using GET method()...
getPoEntryCustomerSelection():Observable<PoEntryNewCustomer[]>{
  return this.http.get<PoEntryNewCustomer[]>("/api/po_from_customer/customer_selection/", //PoEntryCustomerSelection database API LInk
   {
       headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))// send to header
    });       
}

 //PoEntryReciverSelection using GET method()...
 getPoEntryReciverSelection(cust_id,requ_id):Observable<PoEntryReciver[]>{
  return this.http.get<PoEntryReciver[]>("/api/po_from_customer/customer/"+ cust_id +"/contact_person/"+ requ_id +"/delivery_contactperson_selection//", //PoEntry reciverSelection database API LInk
   {
       headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))// send to header
    });       
}



 //PoEntrySupportingInfo using GET method()...
 getPoEntrySupportingInfo(cust_id,requ_id,rece_id):Observable< SupportingInfo[]>{
    return this.http.get<SupportingInfo[]>("/api/po_from_customer/customer/"+ cust_id +"/contact_person/"+ requ_id +"/delivery_contactperson/"+ rece_id +"/supporting_info/",  
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
  console.log(id);
  return this.http.post<PoEntryCustomerTable>("/api/po_from_customer/customer/"+id+"/contact_person_selection/",//employee leave req database API Link
      {
        "name" : name,
       "mobileNo1" : mobileNo1,
      "mobileNo2" : mobileNo2,
      "email1" : email1,
      "email2" : email2,

},{
    headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))// send to header Authorize
});

}

}
