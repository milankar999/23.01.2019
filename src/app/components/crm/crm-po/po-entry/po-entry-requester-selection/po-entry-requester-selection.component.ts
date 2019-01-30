import { Component, OnInit } from '@angular/core';
import{ Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import {PoEntryServicesService}from '../../../../../services/crm/po/po-entry/po-entry-services.service';

import{ HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-po-entry-requester-selection',
  templateUrl: './po-entry-requester-selection.component.html',
  styleUrls: ['./po-entry-requester-selection.component.css']
})
export class PoEntryRequesterSelectionComponent implements OnInit {
  query:string='';
  public requestorId;
  requestorpolist:Object[]=[];
  model:any={};
  display='none';
  customer_id="";

  constructor(private poEntryServicesService:PoEntryServicesService,
    private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
    let id=this.route.snapshot.paramMap.get('customer');
    this.customer_id = id;
    this.PoEntryRequestorSelection(id)
    
  }
  PoEntryRequestorSelection(id){
    this.poEntryServicesService.getPoEntryRequestorSelection(id).subscribe((data)=>{  
      this. requestorpolist=data;
      console.log(this.requestorpolist);
      
  })
}
  
  openModalDialog(){
    this.display='block';
  }
  closeModalDialog(){
    this.display='none';
    
  }
  submitrequestor(){
    localStorage.setItem('requestor', this.model.name);
  }
  submitrequestorlist(event){
    //let id=this.route.snapshot.paramMap.get('customer');
    //this.requestorId=id;
    //console.log(id);
    //this.poEntryServicesService.PostRequestorlist(this.model.name,
     //  this.model.mobileNo1,this.model.mobileNo2, this.model.email1,this.model.email2,id).subscribe(data => {
        
     // console.log(data);//display the console
     
//});
  }
}
