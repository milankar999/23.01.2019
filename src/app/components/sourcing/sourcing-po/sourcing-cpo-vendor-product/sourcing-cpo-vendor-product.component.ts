import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-sourcing-cpo-vendor-product',
  templateUrl: './sourcing-cpo-vendor-product.component.html',
  styleUrls: ['./sourcing-cpo-vendor-product.component.css']
})
export class SourcingCpoVendorProductComponent implements OnInit {

  model:any={}

  form: FormGroup;
  products = [
    { id: 111, Product_Name: 'Pro-00011', description: 'sdf', model:'sdf', brand:'sdfd', part_no:123,product_no:222,hsn_code:203,gst:1235,quantity:"good",UOM:18,price:200 },
    { id: 112, Product_Name: 'Pro-00012', description: 'sdf', model:'sdf', brand:'sdfd', part_no:123,product_no:222,hsn_code:203,gst:1235,quantity:"good",UOM:18,price:200 },
    { id: 113, Product_Name: 'Pro-00013', description: 'sdf', model:'sdf', brand:'sdfd', part_no:123,product_no:222,hsn_code:203,gst:1235,quantity:"good",UOM:18,price:200 },
   
  ];
  constructor(private formBuilder: FormBuilder) { 
    const controls = this.products.map(c => new FormControl(false));
    controls[0].setValue(true); 
    this.form = this.formBuilder.group({
      products: new FormArray(controls)
    });
   
  }

  submit() {
    const selectedOrderIds = this.form.value.products
      .map((v, i) => v ? this.products[i].id : null)
      .filter(v => v !== null);
    console.log(selectedOrderIds);
  }
  

  ngOnInit() {
  }

}
