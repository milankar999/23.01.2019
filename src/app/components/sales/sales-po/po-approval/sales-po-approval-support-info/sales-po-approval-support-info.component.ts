import { Component, OnInit } from '@angular/core';
import{ HttpResponse} from '@angular/common/http';
import{Router, ActivatedRoute} from '@angular/router';
import {PoEntryServicesService}from '../../../../../services/crm/po/po-entry/po-entry-services.service';

@Component({
  selector: 'app-sales-po-approval-support-info',
  templateUrl: './sales-po-approval-support-info.component.html',
  styleUrls: ['./sales-po-approval-support-info.component.css']
})
export class SalesPoApprovalSupportInfoComponent implements OnInit {
SalseApproval:Object[]=[];
Model:any={};
public requestorId ;
display='none';
customer_contact_person:"";
customer_po_no:"";
customer_po_date:"";
delivery_date:"";
billing_address:"";
shipping_address:"";
inco_terms:"";
payment_terms:"";
delivery_contact_person:"";

rejectreason:"";


public customerpono;
  constructor(private PoEntryServicesService:PoEntryServicesService,
    private router:Router, private route:ActivatedRoute) { }

    ngOnInit() {
    let sal_id="4f543dda-df4b-46ba-a759-85a05a406893"; 
    this.customerpono=sal_id;
     console.log(sal_id);
     this. SalesPoApprovalSupport(sal_id);
    }
    
    SalesPoApprovalSupport(sal_id){
      this.PoEntryServicesService.getSalesPoApprovalSupport(sal_id).subscribe((data)=>{
        this.SalseApproval=data;
        console.log(this.SalseApproval);
        this.customer_contact_person = data['customer_contact_person']
        this.customer_po_no = data['customer_po_no']
        this.customer_po_date = data['customer_po_date']
        this.delivery_date=data['delivery_date']
        this.billing_address=data['billing_address']
        this.shipping_address=data['shipping_address']
        this.inco_terms=data['inco_terms']
        this.payment_terms=data['payment_terms']
        this.delivery_contact_person=data['delivery_contact_person'];
        
 this.rejectreason=data['reject_reason']
     
    });
  }

openModalDialog(){
    this.display='block';
  }
  closeModalDialog(){
    this.display='none';

  }

  RejectRequest(event){
    let sal_id= "4f543dda-df4b-46ba-a759-85a05a406893";
    this.PoEntryServicesService.postRejectionlist(this.Model.rejection_reason,sal_id).subscribe((data)=>{
      console.log(data);
      

    });
 }
  }