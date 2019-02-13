import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

//import to the interface datatypes
import { PoApprovalList } from '../../../interface/sales/po/po-approval-list';
import { PoApprovalSupportInfo } from '../../../interface/sales/po/po-approval-support-info';
import { PostPoApprovalSupportInfo } from '../../../interface/sales/po/post-po-approval-support-info';

@Injectable({
  providedIn: 'root'
})
export class PoApprovalService {

  constructor(private http: HttpClient) { }

  getSalesApprovalList():Observable<PoApprovalList[]>{
      return this.http.get<PoApprovalList[]>("/api/po_from_customer/approval/approval_list/",
      
      {
        headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))// send to header
     });   
  }
  getSalesApprovalSupportInfo():Observable< PoApprovalSupportInfo[]>{
    return this.http.get< PoApprovalSupportInfo[]>("/api/po_from_customer/approval/buyer_list/",
    
    {
      headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))// send to header
   });   
  }
  PostSalesApprovalSupportInfo(username){
    return this.http.post< PostPoApprovalSupportInfo []>("/api/po_from_customer/approval/4f543dda-df4b-46ba-a759-85a05a406893/approve/",
      {
      
        "assign_to":username
      },
    {
      headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))// send to header
   });   
}

  }

