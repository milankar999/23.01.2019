import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';
import {PoEntryServicesService}from '../../../../../services/crm/po/po-entry/po-entry-services.service';
import{ Router,ActivatedRoute } from '@angular/router';
import{ HttpResponse} from '@angular/common/http';



@Component({
  selector: 'app-po-entry-product-selection',
  templateUrl: './po-entry-product-selection.component.html',
  styleUrls: ['./po-entry-product-selection.component.css']
})
export class PoEntryProductSelectionComponent implements OnInit {
  form: FormGroup;
  quotation_id="";
  product_title;
  description;
  model;
  brand;
  product_code;
  part_number;
  pack_size;
  moq;
  hsn_code;
  gst;
  quantity;
  uom;
  unit_price;
  lead_time;

  products = [
    {id:''},{id:''}
  ]
  display='none';
  constructor(private poEntryServicesService:PoEntryServicesService,
    private router:Router,private route:ActivatedRoute, private formBuilder: FormBuilder) { 
    const controls = this.products.map(c => new FormControl(false));
    controls[0].setValue(true); 
    this.form = this.formBuilder.group({
      products: new FormArray(controls)
    });
  }
  ngOnInit() {
    let quot_id=this.route.snapshot.paramMap.get('cpo_id');  //display singel api id --
    this.quotation_id = quot_id;
    this.PoProductSelectionPage(quot_id)
  }

  PoProductSelectionPage(quot_id){
    console.log(quot_id);
    this.poEntryServicesService.getPoProductSelectionList(quot_id).subscribe((data)=>{  // get method
     this.products=data;
      console.log(this.products);  
      
  })
}
productsubmit() {
  let quot_id=this.route.snapshot.paramMap.get('cpo_id');
    const selectedOrderIds = this.form.value.products
      .map((v, i) => v ? this.products[i].id : null)
      .filter(v => v !== null);
    console.log(selectedOrderIds);
    this.poEntryServicesService.PostProductSelectedPage(this.products[0].id,quot_id).
  subscribe(data => {
    console.log(data);
    this.router.navigate(['crm/po-entry/cpo/'+quot_id+'/selected-product']);
  });
}  
  openModalDialog(){
    this.display='block';
  }
  closeModalDialog(){
    this.display='none';

  }
}
