import { Component, OnInit } from '@angular/core';
import {PoEntryServicesService}from '../../../../../services/crm/po/po-entry/po-entry-services.service';
import{ Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators,AbstractControl } from '@angular/forms';
import{ HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-po-entry-selected-product',
  templateUrl: './po-entry-selected-product.component.html',
  styleUrls: ['./po-entry-selected-product.component.css']
})
export class PoEntrySelectedProductComponent implements OnInit {
  
  lunchselected:Object[]=[];
  constructor(private poEntryServicesService:PoEntryServicesService,
  private router:Router, private route:ActivatedRoute, private builder:FormBuilder) { }
  
query:string='';
  productdetailpagelist:Object[]=[];
  public requestorId ;
  quotation_id="";

  ngOnInit() {
     
    let quot_id=this.route.snapshot.paramMap.get('cpo_id');  //display singel api id --
    this.quotation_id = quot_id;
    this.PoEntrySelectedProduct(quot_id)
    
  }
  lunchselectedlist(event){
    
    let quot_id=this.route.snapshot.paramMap.get('cpo_id')
    this.poEntryServicesService.PostLunchSelectedlist(quot_id).subscribe(data => {
      console.log(data);
      alert('Your Launch as been success');
      this.router.navigate(['crm/crm-home'])
    
});
  }

  PoEntrySelectedProduct(quot_id){
    this.poEntryServicesService.getPoEntrySelectedProduct(quot_id).subscribe((data)=>{  
      this. productdetailpagelist=data;
      console.log(this. productdetailpagelist);
      
  })     
  }
}
  