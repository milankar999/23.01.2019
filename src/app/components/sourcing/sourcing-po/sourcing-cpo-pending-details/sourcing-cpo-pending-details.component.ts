import { Component, OnInit } from '@angular/core';
import { PoVendorService } from 'src/app/services/sourcing/po/po-vendor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sourcing-cpo-pending-details',
  templateUrl: './sourcing-cpo-pending-details.component.html',
  styleUrls: ['./sourcing-cpo-pending-details.component.css']
})
export class SourcingCpoPendingDetailsComponent implements OnInit {
  cpopendingdetails:object[]=[];
  constructor(private PoVendorService:PoVendorService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    let id="5cb2964d-5b70-466e-8cf5-c8730217a6ca";
    this.CPOPendingDetails(id)
  }
  CPOPendingDetails(id){
    
    this.PoVendorService.getCPOPendingDetailsList(id).subscribe(data=>{
      this. cpopendingdetails=data;
      console.log(data);
    })
  }
  }

