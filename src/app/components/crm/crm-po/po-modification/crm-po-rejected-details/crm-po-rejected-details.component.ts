import { Component, OnInit } from '@angular/core';
import {PoEntryServicesService}from '../../../../../services/crm/po/po-entry/po-entry-services.service';
import{ Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crm-po-rejected-details',
  templateUrl: './crm-po-rejected-details.component.html',
  styleUrls: ['./crm-po-rejected-details.component.css']
})
export class CrmPoRejectedDetailsComponent implements OnInit {
  porejectlinedetailslist:object[]=[];
  
  constructor(private PoEntryServicesService:PoEntryServicesService,private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.PoRejectDetailsList()
  }
  PoRejectDetailsList(){
    this.PoEntryServicesService.getPoRejectLineDetailsList().subscribe(data=>{
      this.porejectlinedetailslist=data;
      console.log(data);
    })
  }
  submitrejectedpolist(event){
    let id="4f543dda-df4b-46ba-a759-85a05a406893";
    this.PoEntryServicesService.PostPoRejectPODetails(id).subscribe(data=>{
      console.log(data);
    })
  }
  submitmarkresolvepolist(event){
    let id="4f543dda-df4b-46ba-a759-85a05a406893";
    this.PoEntryServicesService.PostMarkResolvelist(id).subscribe(data=>{
      console.log(data);
    })
  }

  }


