import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';



@Component({
  selector: 'app-po-entry-customer-selection',
  templateUrl: './po-entry-customer-selection.component.html',
  styleUrls: ['./po-entry-customer-selection.component.css']
})
export class PoEntryCustomerSelectionComponent implements OnInit {
  query:string='';
  customerpolist=[
    {id:1,name:"krupanka", code:"c001",location:"mysuru",state:"karnataka"},
    {id:2,name:"sarika", code:"c002",location:"bangaluru",state:"karnataka"},
    {id:3,name:"sanju", code:"c003",location:"mandya",state:"karnataka"}
  ];
 
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
