import { Component, OnInit } from '@angular/core';
import{ Router, ActivatedRoute } from '@angular/router'; 
import {PoEntryServicesService}from '../../../../../services/crm/po/po-entry/po-entry-services.service';
import{ HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-po-entry-selected-product',
  templateUrl: './po-entry-selected-product.component.html',
  styleUrls: ['./po-entry-selected-product.component.css']
})
export class PoEntrySelectedProductComponent implements OnInit {
  query:string='';
  productdetailpagelist:Object[]=[];
  public requestorId ;
  product_id="";
 
    constructor(private poEntryServicesService:PoEntryServicesService,
    private router:Router, private route:ActivatedRoute,  ) { }

  

  ngOnInit() {
     
    let prod_id="4f543dda-df4b-46ba-a759-85a05a406893";  //display singel api id --
    this.product_id = prod_id;
    this.PoEntrySelectedProduct(prod_id)
    
  }

  PoEntrySelectedProduct(prod_id){
    this.poEntryServicesService.getPoEntrySelectedProduct(prod_id).subscribe((data)=>{  
      this. productdetailpagelist=data;
      console.log(this. productdetailpagelist);
      
  })     
  }
}