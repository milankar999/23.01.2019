import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';


import{ Router,ActivatedRoute } from '@angular/router';
import{ HttpResponse} from '@angular/common/http';
import { PoVendorService} from 'src/app/services/sourcing/po/po-vendor.service';


@Component({

  selector: 'app-sourcing-cpo-vendor-product',
  templateUrl: './sourcing-cpo-vendor-product.component.html',
  styleUrls: ['./sourcing-cpo-vendor-product.component.css']
})
export class SourcingCpoVendorProductComponent implements OnInit {

  model:any={}
  product="";
  cpovendorproduct:object[]=[];

  form: FormGroup;
  products = [
   
  ];
  constructor(private formBuilder: FormBuilder,private PoVendorService:PoVendorService,private router:Router,private route:ActivatedRoute,) { 
    const controls = this.products.map(c => new FormControl(false));
    //controls[0].setValue(true); 
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
   let id=this.route.snapshot.paramMap.get('cpo_id');                          //display singel api id --  app routemodel we mention the id as :cpo_id/
   this.SourcingCpoVenderProduct(id)
  }

  SourcingCpoVenderProduct(id){
    console.log(id);
    this.PoVendorService.getSourcingCpoVenderProduct(id).subscribe((data)=>{  // get method
      this.  cpovendorproduct=data;
     console.log(data);

})
}
}






  
