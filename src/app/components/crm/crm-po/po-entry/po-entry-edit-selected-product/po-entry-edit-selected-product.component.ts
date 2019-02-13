import { Component, OnInit } from '@angular/core';
import {PoEntryServicesService}from '../../../../../services/crm/po/po-entry/po-entry-services.service';
import{ Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-po-entry-edit-selected-product',
  templateUrl: './po-entry-edit-selected-product.component.html',
  styleUrls: ['./po-entry-edit-selected-product.component.css']
})
export class PoEntryEditSelectedProductComponent implements OnInit {
  Model : any={};
  poentryeditselectproduct:object[]=[];
  producttitle="";
  descriptions="";
  models="";
  brands="";
  product_codes="";
  part_nos="";
  pack_sizes="";
  hsn_codes="";
  gst_no="";
  quantitys="";
  uom_no="";
  unit_prices="";


  constructor(private PoEntryServicesService:PoEntryServicesService,private route:ActivatedRoute, private router:Router
     ) { }

  ngOnInit() {
    let id=this.route.snapshot.paramMap.get('id');
    this.PoEntryEditSelectProduct(id);
  }
  PoEntryEditSelectProduct(id){
    this.PoEntryServicesService.getPoEntryEditSelectProduct(id).subscribe((data)=>{  
      this.producttitle=data['product_title'];
      this.descriptions=data['description'];
      this.models=data['model'];
      this.brands=data['brand'];
      this.product_codes=data['product_code'];
      this.part_nos=data['part_no'];
      this.pack_sizes=data['pack_size'];
      this.hsn_codes=data['hsn_code'];
      this.gst_no=data['gst'];
      this.quantitys=data['quantity'];
      this.uom_no=data['uom'];
      this.unit_prices=data['unit_price'];
     console.log (data);
   

  });
}
submiteditproductlist(event){
  let id=this.route.snapshot.paramMap.get('id');

  this.PoEntryServicesService.putEditSelectedProduct(
    this.Model.product_title,
    this.Model.description,
    this.Model.model,
    this.Model.brand,
    this.Model.product_code,
    this.Model.part_no,
    this.Model.pack_size,
    this.Model.hsn_code,this.Model.gst,
    this.Model.quantity,
    this.Model.uom,this.Model.unit_price,id).subscribe(data => {
      console.log(data);
      this.router.navigate(['crm/po-entry/po-entry-selected-product'])
    })
  }
}