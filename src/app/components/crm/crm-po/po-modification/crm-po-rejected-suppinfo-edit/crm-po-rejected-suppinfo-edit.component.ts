import { Component, OnInit } from '@angular/core';
import {PoEntryServicesService}from '../../../../../services/crm/po/po-entry/po-entry-services.service';
import{ Router,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-crm-po-rejected-suppinfo-edit',
  templateUrl: './crm-po-rejected-suppinfo-edit.component.html',
  styleUrls: ['./crm-po-rejected-suppinfo-edit.component.css']
})
export class CrmPoRejectedSuppinfoEditComponent implements OnInit {
  porejectedsuppinfo:object[]=[];
  model:any={};
  customer_pono:"";
  customer_podate:"";
  deliverydate:"";
  billingaddress:"";
  shippingaddress:"";
  incoterms:"";
  paymentterms:0;

  constructor(private PoEntryServicesService:PoEntryServicesService,private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.PoRejectedSuppoInfoList()
  }
  PoRejectedSuppoInfoList(){
    let id="4f543dda-df4b-46ba-a759-85a05a406893";
    this.PoEntryServicesService.getPoRejectedSuppoInfoList(id).subscribe(data=>{
      this.customer_pono=data['customer_po_no'];
      this.customer_podate=data['customer_po_date'];
      this.deliverydate=data['delivery_date'];
      this.billingaddress=data['billing_address'];
      this.shippingaddress=data['shipping_address'];
      this.incoterms=data['inco_terms'];
      this. paymentterms=data['payment_terms'];
      this.porejectedsuppinfo=data;
      console.log(data);
    })
  }
  submitrejectedsuppinfolist(event){
    let id="4f543dda-df4b-46ba-a759-85a05a406893";
    this.PoEntryServicesService.PostPoRejectSuppInfo(this.model.customer_po_no,
      this.model.customer_po_date,
      this.model.delivery_date,
      this.model.billing_address,
      this.model.shipping_address,
      this.model.inco_terms,
      this.model. payment_terms,
      id).subscribe(data=>{
      this.porejectedsuppinfo=data;
      console.log(data);
    })

  }
  }


