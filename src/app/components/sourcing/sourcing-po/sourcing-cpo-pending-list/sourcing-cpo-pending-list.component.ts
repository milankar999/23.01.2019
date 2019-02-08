import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';




@Component({
  selector: 'app-sourcing-cpo-pending-list',
  templateUrl: './sourcing-cpo-pending-list.component.html',
  styleUrls: ['./sourcing-cpo-pending-list.component.css']
})
export class SourcingCpoPendingListComponent implements OnInit {

    form: FormGroup;
    products=[
      {PO_NO: 908,Customer_name: 'jay',Location:'mumbai',Creation_Date:'1/2/2019',Priorrity:'regular'},
      {PO_NO: 908,Customer_name: 'jay',Location:'mumbai',Creation_Date:'1/2/2019',Priorrity:'regular'},
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
      .map((v, i) => v ? this.products[i].PO_NO : null)
      .filter(v => v !== null);
    console.log(selectedOrderIds);
  }
  

  ngOnInit() {
  }

}
