 
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
import  { QuotationDetails  } from '../../../../interface/crm/po/po-entry/quotation-details';
import  { PostQuotationSelection  } from '../../../../interface/crm/po/po-entry/post-quotation-selection'
import  {  PoEntryEditSelectedProduct } from '../../../../interface/crm/po/po-entry/po-entry-edit-selected-product';
import { CrmPoRejectList } from '../../../../interface/crm/po/po-entry/crm-po-reject-list';
import { CrmPoRejectLineitems } from '../../../../interface/crm/po/po-entry/crm-po-reject-lineitems';
import { PoRejectedDetails } from '../../../../interface/crm/po/po-entry/po-rejected-details';
import { CrmPoRejectSuppinfoEdit } from '../../../../interface/crm/po/po-entry/crm-po-reject-suppinfo-edit';

@Injectable({
  providedIn: 'root'
})
export class PoEntryServicesService {

  constructor(private http: HttpClient) { }

  //PoEntryCustomerSelection using GET method()...Component--(po-entry-customer-selection)
  getPoEntryCustomerSelection():Observable<PoEntryNewCustomer[]>{
  return this.http.get<PoEntryNewCustomer[]>("/api/po_from_customer/customer_selection/", //PoEntryCustomerSelection database API LInk
   {
       headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))// send to header
    });       
}

 
 //PoEntryReciverSelection using GET method()...Component--(po-entry-Reciver-selection)
 getPoEntryReciverSelection(cust_id,requ_id):Observable<PoEntryReciver[]>{
  return this.http.get<PoEntryReciver[]>("/api/po_from_customer/customer/"+ cust_id +"/contact_person/"+ requ_id +"/delivery_contactperson_selection/", //PoEntry reciverSelection database API LInk
   {
       headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))// send to header
    });       
}

//PoEntryReciverSelection using POST method()...Component--(po-entry-Reciver-selection)
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

 //PoEntrySupportingInfo using GET method()...Component--(po-entry-SupportingInfo )
 getPoEntrySupportingInfo(cust_id,requ_id,rece_id):Observable< SupportingInfo[]>{
    return this.http.get<SupportingInfo[]>("/api/po_from_customer/customer/"+ cust_id +"/contact_person/"+ requ_id +"/delivery_contactperson/"+ rece_id +"/supporting_info/",  
     {
         headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))// send to header
      });       
  }
   
  
 //PoEntrySupportingInfo using POST method()...Component--(po-entry-SupportingInfo )
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


 //PoEntryRequestorSelection using GET method()..Component--(po-entry-Requestor-selection)
  getPoEntryRequestorSelection(id):Observable<PoEntryCustomerTable[]>{
 return this.http.get<PoEntryCustomerTable[]>("/api/po_from_customer/customer/"+id+"/contact_person_selection/", //PoEntryRequestorSelection database API LInk
   { 
       headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))// send to header
    });       
}

//PoEntryRequestorSelection using POST method()..Component--(po-entry-Requestor-selection)
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



//PoEntryQuotationSelectionusing GET method()...Component--(po-entry-QuotationSelection-page)
getQuotationSelectionPage(quot_id):Observable<QuotationSelectionPage[]>{        
  return this.http.get<QuotationSelectionPage[]>("/api/po_from_customer/customer/"+ quot_id +"/quotation_selection/", //PoEntryQuotationSelection database API LInk
   {
       headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))// send to header
    });       
}

//PoEntryQuotationSelectionusing Post method()...Component--(po-entry-QuotationSelection-page)
  PostQuotationlist(quotation_no:object[]){
    return this.http.post<PostQuotationSelection >("api/po_from_customer/customer/4f543dda-df4b-46ba-a759-85a05a406893/quotation_selected/",
    {
       "quotation_no" : [quotation_no]
},{
  headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))// send to header Authorize
});

}

//PoEntryQuotationSelectionusing Details GET method()...Component--(po-entry-QuotationSelection-Details)
getQuotationDetails(id):Observable<QuotationDetails[]>{

  return this.http.get<QuotationDetails[]>("/api/po_from_customer/customer/"+ id +"/quotation_details/",
  {
    headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))// send to header Authorize
}); 
  }

//PoEntryQuotationSelectionusing LUNCH Post method()...Component--(po-entry-QuotationSelection-Details)
PostLunchSelectedlist(id){
  return this.http.post<[]>("/api/po_from_customer/customer/4f543dda-df4b-46ba-a759-85a05a406893/launch/",
  {
    "id":id
  },
  {
      headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))// send to header Authorize
  });
}


//PoEntryEditSelectedProduct GET method()...Component--(po-entry-Edit-Select-Product)
getPoEntryEditSelectProduct(id):Observable<PoEntryEditSelectedProduct[]>{        
  return this.http.get<PoEntryEditSelectedProduct[]>("api/po_from_customer/customer/4f543dda-df4b-46ba-a759-85a05a406893/selected_product/ddd5a05b-765c-4573-8527-89eface7bbd7/edit/", //PoEntryQuotationSelection database API LInk
   {
       headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))// send to header
    });       

}


//PoEntryputEditSelectedProduct PUT method()...Component--(po-entry-Edit-Select-Product)
putEditSelectedProduct(product_title,description,model,brand,product_code,part_no,pack_size,hsn_code,gst,quantity,uom,unit_price,id){
  return this.http.put<PoEntryEditSelectedProduct[]>("api/po_from_customer/customer/4f543dda-df4b-46ba-a759-85a05a406893/selected_product/ddd5a05b-765c-4573-8527-89eface7bbd7/edit/",
  {
    "id":id,    
    "product_title":product_title,
    "description":description,
    "model":model,
    "brand":brand,
    "product_code":product_code,
    "part_no":part_no,
    "pack_size":pack_size,
    "hsn_code":hsn_code,
    "gst":gst,
    "quantity":quantity,
    "uom":uom,
    "unit_price":unit_price,
    },
    {
    
    headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))// send to header
  });     
 
}


//PoEntrygetCrmPoRejectList GET method()...Component--(po-modification-Reject-list)
getCrmPoRejectList():Observable<CrmPoRejectList []>{        
  return this.http.get<CrmPoRejectList []>("/api/po_from_customer/rejected/rejected_list/", //PoEntryrejected list database API LInk
   {
       headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))// send to header
    });       

}


//PoEntrygetPoRejectLineDetailsList GET method()...Component--(po-modification-Rejected-Details)
getPoRejectLineDetailsList():Observable<PoRejectedDetails[]>{        
  return this.http.get<PoRejectedDetails[]>("/api/po_from_customer/rejected/4f543dda-df4b-46ba-a759-85a05a406893/rejected_lineitems/", //PoEntryrejected Details list database API LInk
   {
       headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))// send to header
    });       
}

//PoEntryPostPoRejectPODetails POST method()...Component--(po-modification-Reject-Details)
PostPoRejectPODetails(id){
  return this.http.post<[]>("/api/po_from_customer/rejected/4f543dda-df4b-46ba-a759-85a05a406893/delete/", //PoEntryrejected Details list database API LInk
  {
      "id":id
  },
  {
       headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))// send to header
    });       
}

//PoEntryPostMarkResolvelist POST method()...Component--(po-modification-Reject-Details)
PostMarkResolvelist(id){
  return this.http.post<[]>("/api/po_from_customer/rejected/4f543dda-df4b-46ba-a759-85a05a406893/mark_resolve/", //PoEntryrejected Details list database API LInk
  {
    "id":id
  },
  {
       headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))// send to header
    });       
}

//PoEntry getPoRejectLineItemListEdit GET method()...Component--(po-modification-Rejected-LineItem-Edit)
getPoRejectLineItemListEdit(id,id1):Observable< CrmPoRejectLineitems[]>{  
  return this.http.get< CrmPoRejectLineitems[]>("/api/po_from_customer/rejected/"+id+"/lineitem/"+id1+"/edit/", //PoEntryrejected lineitem list database API LInk
   {
       headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))// send to header
    });       

}


//PoEntry putrejectedlineitemlist PUT method()....Component--(po-modification-Rejected-LineItem-Edit)
putrejectedlineitemlist(product_title,description,model,brand,product_code,part_no,pack_size,hsn_code,gst,quantity,uom,unit_price,id){
  return this.http.put<CrmPoRejectLineitems[]>("api/po_from_customer/rejected/4f543dda-df4b-46ba-a759-85a05a406893/lineitem/6323ced1-17aa-4ae8-8939-c59fc03f8a47/edit/", //PoEntryrejected lineitem list database API LInk,
  {
    "id":id,    
    "product_title":product_title,
    "description":description,
    "model":model,
    "brand":brand,
    "product_code":product_code,
    "part_no":part_no,
    "pack_size":pack_size,
    "hsn_code":hsn_code,
    "gst":gst,
    "quantity":quantity,
    "uom":uom,
    "unit_price":unit_price,
    },
    {
    
    headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))// send to header
  });     
 
}

//PoEntry postdeleterejectlineitemDetails Delete method()....Component--(po-modification-Rejected-LineItem-Edit)
postdeleterejectlineitemDetails(id){
  return this.http.delete<[]>("api/po_from_customer/rejected/4f543dda-df4b-46ba-a759-85a05a406893/lineitem/"+id+"/edit/", //PoEntryrejected lineitem list database API LInk,
  
    {
    headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))// send to header
  });   
    }

//PoEntry getPoRejectedSuppoInfoList GET method()...Component--(po-modification-Rejected-Supp-info-edit)
 getPoRejectedSuppoInfoList(id):Observable<CrmPoRejectSuppinfoEdit[]>{        
      return this.http.get<CrmPoRejectSuppinfoEdit[]>("/api/po_from_customer/rejected/"+id+"/supporting_info_edit/", //PoEntryQuotationSelection database API LInk
       {
           headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))// send to header
        });        
    }
  

//PoEntry PostPoRejectSuppInfo PUT method()... .Component--(po-modification-Rejected-Supp-info-edit)
 PostPoRejectSuppInfo(customer_po_no,customer_po_date,delivery_date,billing_address,shipping_address, inco_terms,payment_terms,id){
      return this.http.put<CrmPoRejectSuppinfoEdit[]>("/api/po_from_customer/rejected/"+id+"/supporting_info_edit/", //PoEntryQuotationSelection database API LInk
      {
       
        "customer_po_no":customer_po_no,
        "customer_po_date": customer_po_date,
        "delivery_date": delivery_date,
        "billing_address": billing_address,
        "shipping_address": shipping_address,
        "inco_terms":  inco_terms,
        "payment_terms": payment_terms,
      },
      {
          headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))// send to header
       });        
   }
    }

