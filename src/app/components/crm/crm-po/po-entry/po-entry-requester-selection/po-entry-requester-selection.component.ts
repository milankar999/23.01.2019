import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-po-entry-requester-selection',
  templateUrl: './po-entry-requester-selection.component.html',
  styleUrls: ['./po-entry-requester-selection.component.css']
})
export class PoEntryRequesterSelectionComponent implements OnInit {
  query:string='';
  requestpolist=[
    {id:1,name:"krupanka",mobile1:23454,mobile2:24354,email1:"krupa@gmail.com",email2:"ksarika@gmail.com"},
    {id:2,name:"krupasarika",mobile1:288954,mobile2:245654,email1:"krupanka@gmail.com",email2:"ksarikakrupa@gmail.com"},
    {id:3,name:"sanju",mobile1:224654,mobile2:247954,email1:"krupasanju@gmail.com",email2:"ksanju@gmail.com"},
  ]
 
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
