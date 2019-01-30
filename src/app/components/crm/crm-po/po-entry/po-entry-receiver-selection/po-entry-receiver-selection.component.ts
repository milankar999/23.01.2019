import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import{ Router, ActivatedRoute } from '@angular/router';

import {PoEntryServicesService}from '../../../../../services/crm/po/po-entry/po-entry-services.service';

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
 requestor_id="";
 reciverselectionlist:object[]=[];
  reciverpolist=[
    {id:1,name:"krupanka",mobile1:23454,mobile2:24354,email1:"krupa@gmail.com",email2:"ksarika@gmail.com"},
    {id:2,name:"krupasarika",mobile1:288954,mobile2:245654,email1:"krupanka@gmail.com",email2:"ksarikakrupa@gmail.com"},
    {id:3,name:"sanju",mobile1:224654,mobile2:247954,email1:"krupasanju@gmail.com",email2:"ksanju@gmail.com"},
  ]
 
  display='none';

  constructor(private poEntryServicesService:PoEntryServicesService,
    private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
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
