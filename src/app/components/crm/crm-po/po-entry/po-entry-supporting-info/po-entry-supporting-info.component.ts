import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import {PoEntryServicesService}from '../../../../../services/crm/po/po-entry/po-entry-services.service';
import{ Router, ActivatedRoute } from '@angular/router';
import{ HttpResponse} from '@angular/common/http';


@Component({
  selector: 'app-po-entry-supporting-info',
  templateUrl: './po-entry-supporting-info.component.html',
  styleUrls: ['./po-entry-supporting-info.component.css']
})
export class PoEntrySupportingInfoComponent implements OnInit {
  query:string='';
  public requestorId;
  supportinfolist:Object[]=[];
  display='none';
  model:any={};
  
  customer_id="";
  requester_id=""; 
  receiver_id="";

  address = "";
  shipping_address = "";
  billing_address = "";
  inco_term = "";
  payment_term = 0;




  constructor(private  poEntryServicesService:PoEntryServicesService,
    private router:Router, private route:ActivatedRoute) { }

  ngOnInit() { 
  let cust_id=this.route.snapshot.paramMap.get('customer');
  let requ_id=this.route.snapshot.paramMap.get('requester');
  let rece_id=this.route.snapshot.paramMap.get('receiver');
  this.customer_id = cust_id;
  this.requester_id = requ_id;
  this.receiver_id=rece_id;
  this.PoEntrySupportingInfo(cust_id,requ_id,rece_id);

  }
  PoEntrySupportingInfo(cust_id,requ_id,rece_id){
    this.poEntryServicesService.getPoEntrySupportingInfo(cust_id,requ_id, rece_id).subscribe((data)=>{  
      this.address=data[0]['address'];
      this.shipping_address=data[0]['shipping_address'];
      this.billing_address=data[0]['billing_address'];
      this.inco_term=data[0]['inco_term'];
      this.payment_term=data[0]['payment_term'];
      if(this.shipping_address=="Same")
        this.shipping_address=this.address;
      if(this.billing_address=="Same")
        this.billing_address=this.address;
      console.log(this.address);      
  })
}




openModalDialog()
    {
      this.display='block';
    }
    closeModalDialog()
    {
      this.display='none';
      }

}

