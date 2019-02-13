import { Component, OnInit } from '@angular/core';
import {PoEntryServicesService}from '../../../../../services/crm/po/po-entry/po-entry-services.service';
import{ Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crm-po-rejected-lineitem-edit',
  templateUrl: './crm-po-rejected-lineitem-edit.component.html',
  styleUrls: ['./crm-po-rejected-lineitem-edit.component.css']
})
export class CrmPoRejectedLineitemEditComponent implements OnInit {
rejectlineitemedit:object[]=[];
Model : any={};
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

 
  constructor(private PoEntryServicesService:PoEntryServicesService,private route:ActivatedRoute, private router:Router ) { }

  ngOnInit() {
    let id="4f543dda-df4b-46ba-a759-85a05a406893";
    let id1="6323ced1-17aa-4ae8-8939-c59fc03f8a47";
   this.PoRejectLineItemList(id,id1)
   console.log(id);
  
  }
  PoRejectLineItemList(id,id1){
    this.PoEntryServicesService.getPoRejectLineItemListEdit(id,id1).subscribe(data=>{
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
     this.rejectlineitemedit=data;
   
   })
  }
  submitrejectedlineitemlist(event){
    let id=this.route.snapshot.paramMap.get('id');
  
    this.PoEntryServicesService.putrejectedlineitemlist(
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
})
  }
  deleterejectlineitemlist(event){
    let id="6323ced1-17aa-4ae8-8939-c59fc03f8a47"
    this.PoEntryServicesService.postdeleterejectlineitemDetails(id).subscribe(data=>{
      console.log(data);
      
    })
  }
  }