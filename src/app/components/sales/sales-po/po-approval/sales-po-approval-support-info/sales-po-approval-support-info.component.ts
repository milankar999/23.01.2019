import { Component, OnInit } from '@angular/core';
import { PoApprovalService } from 'src/app/services/sales/po/po-approval.service';
import { Subscriber } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sales-po-approval-support-info',
  templateUrl: './sales-po-approval-support-info.component.html',
  styleUrls: ['./sales-po-approval-support-info.component.css']
})
export class SalesPoApprovalSupportInfoComponent implements OnInit {
  display='none';
  model:any={};
  buyer:object[]=[];
  salesapprovalsupportinfo:Object[]=[];
  constructor(private PoApprovalService:PoApprovalService,private router:Router) { }

  ngOnInit() {
    this.SalesApprovalSupportInfo()
  }
  SalesApprovalSupportInfo(){
    this.PoApprovalService.getSalesApprovalSupportInfo().subscribe((data)=>{  
     console.log (data);
    this.buyer = data;
    });
  }
  submitapprovalsupportinginfolist(event){
    let id="4f543dda-df4b-46ba-a759-85a05a406893"
    this.PoApprovalService.PostSalesApprovalSupportInfo(this.model.username).subscribe(data => {
      console.log(data);
      alert('Your approval as been success');
      this.router.navigate(['sales/sales-po/sales-po-approval-list']);
  });
  }


openModalDialog(){
  this.display='block';
}
closeModalDialog(){
  this.display='none';
  
}
}
