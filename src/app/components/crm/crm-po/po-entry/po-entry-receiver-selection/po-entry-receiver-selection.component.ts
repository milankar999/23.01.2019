import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-po-entry-receiver-selection',
  templateUrl: './po-entry-receiver-selection.component.html',
  styleUrls: ['./po-entry-receiver-selection.component.css']
})
export class PoEntryReceiverSelectionComponent implements OnInit {
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
openModalDialog()
    {
      this.display='block';
    }
    closeModalDialog()
    {
      this.display='none';
      }

}
