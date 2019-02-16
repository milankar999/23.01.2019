import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';
import {PoEntryServicesService}from '../../../../../services/crm/po/po-entry/po-entry-services.service';
import{ Router,ActivatedRoute } from '@angular/router';
import{ HttpResponse} from '@angular/common/http';


@Component({
  selector: 'app-po-entry-quotation-selection',
  templateUrl: './po-entry-quotation-selection.component.html',
  styleUrls: ['./po-entry-quotation-selection.component.css']
})
export class PoEntryQuotationSelectionComponent implements OnInit {
  form: FormGroup;

  model:any={};              //vadilation calling model in html in forms...
  public requestorId ;
  product=[                 //its tables counts..
    {quotation_no:''},
    {quotation_no:''},
  ]
  display='none';
  quotation_id="";         //table fiilds.
  quotation_no;
  quotation_date;
  rfp;
  enquiry_reference;
  CPOResponsequot:Object[]=[];

  
  
  
constructor(private poEntryServicesService:PoEntryServicesService,
  private router:Router,private route:ActivatedRoute, private formBuilder: FormBuilder) { 
    const controls = this.product.map(c => new FormControl(false));
    controls[0].setValue(true); 
    this.form = this.formBuilder.group({
      product: new FormArray(controls)            //Array controls
    });
  
}
  ngOnInit() {
    //let  quot_id="4f543dda-df4b-46ba-a759-85a05a406893"; 
    let quot_id=this.route.snapshot.paramMap.get('cpo_id');  //display singel api id --
    this.quotation_id = quot_id;
    this.PoQuotationSelectionPage(quot_id)
    
  }
  PoQuotationSelectionPage(quot_id){
    console.log(quot_id);
    this.poEntryServicesService.getQuotationSelectionPage(quot_id).subscribe((data)=>{  // get method
      this.product=data;
      console.log(this.product);  
      
  })
}
submit(event){
  let quot_id=this.route.snapshot.paramMap.get('cpo_id');  //display singel api id --
  const selectedOrderIds=this.form.value.product
  .map((v, i)=> v ? this. product[i].quotation_no:null)
  .filter(v=>v!==null);
  console.log(selectedOrderIds);
  this.poEntryServicesService.PostQuotationlist(this.product[0].quotation_no,quot_id).
  subscribe(data => {
    console.log(data);
   
    this.router.navigate(['crm/po-entry/'+quot_id+'/quotation-selection/production-selection']);
   
});
}

}













































