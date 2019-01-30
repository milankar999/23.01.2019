import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import{ Router, ActivatedRoute } from '@angular/router';
import {PoEntryServicesService}from '../../../../../services/crm/po/po-entry/po-entry-services.service';

import{ HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-po-entry-receiver-selection',
  templateUrl: './po-entry-receiver-selection.component.html',
  styleUrls: ['./po-entry-receiver-selection.component.css']
})
export class PoEntryReceiverSelectionComponent implements OnInit {
 query:string='';
 model:any={};
 public reciverId;
 customer_id="";
 requester_id=""; 
 reciverselectionlist:object[]=[];
 public requestorId;
 display='none';


constructor(private  poEntryServicesService:PoEntryServicesService, private router:Router, private route:ActivatedRoute) { }


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
     submitreciverlist(event){
           let id=this.route.snapshot.paramMap.get('customer');
           let id1=this.route.snapshot.paramMap.get('requester');
           this.reciverId=id;
           this.poEntryServicesService.PostReciverlist(this.model.person_name,
           this.model.mobileNo1,this.model.mobileNo2, this.model.email1,this.model.email2,this.model.department_name,id,id1).subscribe(data => {
           console.log(data);//display the console    
       });
    }
  }
