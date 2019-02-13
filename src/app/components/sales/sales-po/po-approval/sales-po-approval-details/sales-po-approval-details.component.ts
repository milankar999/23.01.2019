import { Component, OnInit } from '@angular/core';
import{ Router, ActivatedRoute } from '@angular/router'; 
import {PoEntryServicesService}from '../../../../../services/crm/po/po-entry/po-entry-services.service';
import{ HttpResponse} from '@angular/common/http';



@Component({
  selector: 'app-sales-po-approval-details',
  templateUrl: './sales-po-approval-details.component.html',
  styleUrls: ['./sales-po-approval-details.component.css']
})
export class SalesPoApprovalDetailsComponent implements OnInit {
  query:string='';
  SalesPoApprovallist:Object[]=[];
  public requestorId ;
  salse_id="";

  constructor(private poEntryServicesService:PoEntryServicesService,
    private router:Router, private route:ActivatedRoute,  ) { }

  ngOnInit() {
    let sal_id="4f543dda-df4b-46ba-a759-85a05a406893";  //display singel api id --
    this.salse_id =sal_id;
    this.SalesPoApprovalDetails(sal_id)
  }

  SalesPoApprovalDetails(sal_id){
    this.poEntryServicesService.getSalesPoApprovalDetails(sal_id).subscribe((data)=>{  
      this.SalesPoApprovallist=data;
      console.log(this.SalesPoApprovallist);
      
  })     
  }
}