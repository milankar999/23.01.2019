import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';



@Component({
  selector: 'app-po-entry-customer-selection',
  templateUrl: './po-entry-customer-selection.component.html',
  styleUrls: ['./po-entry-customer-selection.component.css']
})
export class PoEntryCustomerSelectionComponent implements OnInit {
 
 display='none';
  constructor() { }
  

  ngOnInit() {
  }
  
  openModalDialog(){
    this.display='block';
  }
  closeModalDialog(){
    this.display='none';

  }
}
