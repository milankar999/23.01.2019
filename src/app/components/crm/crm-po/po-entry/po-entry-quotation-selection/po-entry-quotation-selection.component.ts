import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';



@Component({
  selector: 'app-po-entry-quotation-selection',
  templateUrl: './po-entry-quotation-selection.component.html',
  styleUrls: ['./po-entry-quotation-selection.component.css']
})
export class PoEntryQuotationSelectionComponent implements OnInit {
  form: FormGroup;
  orders = [
    { id: 11, quotation_no: 'AP-0011', Date: 'sdf', contact_person:'sdf', sourcing_person:'sdfd' },
    { id: 12, quotation_no: 'AP-0012', Date: 'sdf', contact_person:'sdf', sourcing_person:'sdfd' },
    { id: 13, quotation_no: 'AP-0013', Date: 'sdf', contact_person:'sdf', sourcing_person:'sdfd' },
    { id: 14, quotation_no: 'AP-0014', Date: 'sdf', contact_person:'sdf', sourcing_person:'sdfd' },
    { id: 15, quotation_no: 'AP-0015', Date: 'sdf', contact_person:'sdf', sourcing_person:'sdfd' }
  
  ];
  display='none';
  constructor(private formBuilder: FormBuilder) { 
    const controls = this.orders.map(c => new FormControl(false));
    controls[0].setValue(true); 
    this.form = this.formBuilder.group({
      orders: new FormArray(controls)
    });
  }
  submit() {
    const selectedOrderIds = this.form.value.orders
      .map((v, i) => v ? this.orders[i].id : null)
      .filter(v => v !== null);

    console.log(selectedOrderIds);
  }
  

  ngOnInit() {
  }
  
  openModalDialog(){
    this.display='block';
  }
  closeModalDialog(){
    this.display='none';

  }
}
