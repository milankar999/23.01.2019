 
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
 
//import to the interface datatypes

import  { PoEntryNewCustomer }from '../../../../interface/crm/po/po-entry/po-entry-new-customer'; 
import  { PoEntryCustomerTable }from '../../../../interface/crm/po/po-entry/po-entry-customer-table'; 
import  { PoEntryReceiver } from '../../../../interface/crm/po/po-entry/po-entry-receiver';
import  { PoEntryReciver }from '../../../../interface/crm/po/po-entry/po-entry-reciver';
import  { SupportingInfo} from '../../../../interface/crm/po/po-entry/supporting-info';
import  { StoreSupportingInfo } from '../../../../interface/crm/po/po-entry/store-supporting-info'
import  { QuotationSelectionPage} from '../../../../interface/crm/po/po-entry/quotation-selection-page';
import  {QuotationDetails} from '../../../../interface/crm/po/po-entry/quotation-details';
import  {SelectedProduct} from '../../../../interface/crm/po/po-entry/selected-product';
//import to sales iterface
import  {SalesApprovalDetails} from '../../../../interface/sales/po/sales-approval-details';
import  {SalesPoApprovalSupport}from '../../../../interface/sales/po/sales-po-approval-support';

@Injectable({
  providedIn: 'root'
})
export class PoEntryServicesService {
   poEntryCustomer:PoEntryNewCustomer []=[];
   id;
   reciverselectionlist:PoEntryReciver[]=[];
   supportinfolist:SupportingInfo[]=[];
   QuotationDetails:QuotationDetails[]=[];               
   Quotationselectionlist:QuotationSelectionPage[]=[];     // 1 QuotationSelectionPage is interface name ..  2 Quotationselectionlist is object name ..
//salse interface
   SalesPoApprovallist:SalesApprovalDetails[]=[];
   salespoapprovalsupport:SalesPoApprovalSupport[]=[];
   //Sourcing cpo  interface is in po-vender.service.ts

  constructor(private http: HttpClient) { }

  //PoEntryCustomerSelection using GET method()...
  getPoEntryCustomerSelection():Observable<PoEntryNewCustomer[]>{
  return this.http.get<PoEntryNewCustomer[]>("/api/po_from_customer/customer_selection/", //PoEntryCustomerSelection database API LInk
   {
       headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))// send to header
    });       
}
getSalesPoApprovalSupport(sal_id):Observable<SalesPoApprovalSupport[]> {
    return this.http.get<SalesPoApprovalSupport[]>(" /api/po_from_customer/approval/"+ sal_id +"/informations/", 
    {
        headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))
     }); 
  }
   
  //Po-Entry-Selected-Product using GET method()...
   getPoEntrySelectedProduct(prod_id):Observable<SelectedProduct[]>{
    return this.http.get<SelectedProduct[]>("/api/po_from_customer/customer/"+ prod_id +"/quotation_product_list/", //PoEntrySelectedProduct database API LInk
     {
         headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))// send to header
      });       
  }

   // sales-po-Approval Details using GET method()...
    getSalesPoApprovalDetails(sal_id):Observable<SalesApprovalDetails[]>{
    return this.http.get<SalesApprovalDetails[]>("/api/po_from_customer/approval/"+ sal_id +"/lineitems/", //PoEntrySelectedProduct database API LInk
     {
         headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))// send to header
      });       
  }



    //PoEntryQuotationSelectionusing GET method()...
    getQuotationSelectionPage(quot_id):Observable<QuotationSelectionPage[]>{        
    return this.http.get<QuotationSelectionPage[]>("/api/po_from_customer/customer/"+ quot_id +"/quotation_selection/", //PoEntryQuotationSelection database API LInk
     {
         headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))// send to header
      });       
  }
   
  
 
   //PoEntryReciverSelection using GET method()...
    getPoEntryReciverSelection(cust_id,requ_id):Observable<PoEntryReciver[]>{
    return this.http.get<PoEntryReciver[]>("/api/po_from_customer/customer/"+ cust_id +"/contact_person/"+ requ_id +"/delivery_contactperson_selection/", //PoEntry reciverSelection database API LInk
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
                     // postmethod

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

getQuotationDetails(id):Observable<QuotationDetails[]>{

  return this.http.get<QuotationDetails[]>("/api/po_from_customer/customer/"+ id +"/quotation_details/",
  {
    headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))// send to header Authorize
}); 
  }

//PoEntrySupportingInfo using POST method()...
PostSupportInfolist(shipping_address,billing_address,inco_terms,payment_term,delivery_date,customer_po_no,customer_po_date,cust_id,requ_id ,rece_id){
    console.log(customer_po_no);
    console.log(customer_po_date);
    console.log(delivery_date);
    console.log(billing_address);
    console.log(shipping_address);
    console.log(inco_terms);
    console.log(payment_term);
   return this.http.post<StoreSupportingInfo[]>("/api/po_from_customer/customer/"+ cust_id +"/contact_person/"+ requ_id +"/delivery_contactperson/"+ rece_id +"/store_supporting_info/",
   {
       "customer_po_no": customer_po_no,    
       "customer_po_date" :customer_po_date,
       "delivery_date": delivery_date,
       "billing_address":billing_address,
       "shipping_address": shipping_address,
       "inco_terms":inco_terms,
       "payment_term": payment_term,
   
   },
   {
       headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))
   });
   } 



//sales-po-approval-Support-info using POST method()...

  postRejectionlist(rejection_reason,sal_id){
   console.log(rejection_reason);
  return this.http.post<SalesPoApprovalSupport[]>("/api/po_from_customer/approval/"+sal_id+"/reject/",
  {

   "rejection_reason":rejection_reason,
   },
   {
       headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))
   });
}
}