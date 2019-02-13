import { Component, OnInit } from '@angular/core';
import { PoApprovalService } from 'src/app/services/sales/po/po-approval.service';

@Component({
  selector: 'app-sales-po-approval-list',
  templateUrl: './sales-po-approval-list.component.html',
  styleUrls: ['./sales-po-approval-list.component.css']
})
export class SalesPoApprovalListComponent implements OnInit {

  salesapprovallist:object[]=[];
  constructor(private PoApprovalService:PoApprovalService) { }

  ngOnInit() {
    this.SalesApprovalList()
  }
  SalesApprovalList(){
    this. PoApprovalService.getSalesApprovalList().subscribe((data)=>{  
      this.salesapprovallist=data;
      console.log( this.salesapprovallist);
      
  })
}
  }

