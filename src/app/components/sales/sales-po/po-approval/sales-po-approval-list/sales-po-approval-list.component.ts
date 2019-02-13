import { Component, OnInit } from '@angular/core';
import{ Router, ActivatedRoute } from '@angular/router'; 
import {PoEntryServicesService}from '../../../../../services/crm/po/po-entry/po-entry-services.service';
import{ HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-sales-po-approval-list',
  templateUrl: './sales-po-approval-list.component.html',
  styleUrls: ['./sales-po-approval-list.component.css']
})
export class SalesPoApprovalListComponent implements OnInit {
  query:string='';
  
 
 

  constructor(private poEntryServicesService:PoEntryServicesService,
    private router:Router, private route:ActivatedRoute,  ) { }

  ngOnInit() {
    
  }
}