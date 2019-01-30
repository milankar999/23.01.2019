import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators} from '@angular/forms';
import {PoEntryServicesService}from '../../../../../services/crm/po/po-entry/po-entry-services.service';

import{ Router, ActivatedRoute } from '@angular/router';
import{ HttpResponse} from '@angular/common/http';


@Component({
  selector: 'app-po-entry-receiver-selection',
  templateUrl: './po-entry-receiver-selection.component.html',
  styleUrls: ['./po-entry-receiver-selection.component.css']
})
export class PoEntryReceiverSelectionComponent implements OnInit {
 query:string='';
 public requestorId;
 reciverselectionlist:Object[]=[];
 display='none';
 model:any={};
 
 customer_id="";
 requester_id=""; 

constructor(private  poEntryServicesService:PoEntryServicesService,
 private router:Router, private route:ActivatedRoute) { }


 ngOnInit() {
    let cust_id=this.route.snapshot.paramMap.get('customer');
    let requ_id=this.route.snapshot.paramMap.get('requester');
    this.customer_id = cust_id;
    this.requester_id = requ_id;
    this.PoEntryReciverSelection(cust_id,requ_id);
}
PoEntryReciverSelection(cust_id,requ_id){
  this.poEntryServicesService.getPoEntryReciverSelection(cust_id,requ_id).subscribe((data)=>{  
    this.reciverselectionlist=data;
    console.log(this.reciverselectionlist);
    
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
