import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-po-entry-requester-selection',
  templateUrl: './po-entry-requester-selection.component.html',
  styleUrls: ['./po-entry-requester-selection.component.css']
})
export class PoEntryRequesterSelectionComponent implements OnInit {
  date;
  logedInForm;
  emailId;
  customername;
  display='none';

  constructor() { }

  ngOnInit() {
  }
  mdfLogin(data){
    this.customername=data.customername;
  }
  openModalDialog(){
    this.display='block';
  }
  closeModalDialog(){
    this.display='none';
    
  }
}
