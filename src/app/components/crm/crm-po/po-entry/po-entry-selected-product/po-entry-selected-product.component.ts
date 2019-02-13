import { Component, OnInit } from '@angular/core';
import {PoEntryServicesService}from '../../../../../services/crm/po/po-entry/po-entry-services.service';
import{ Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators,AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-po-entry-selected-product',
  templateUrl: './po-entry-selected-product.component.html',
  styleUrls: ['./po-entry-selected-product.component.css']
})
export class PoEntrySelectedProductComponent implements OnInit {
  lunchselected:Object[]=[];
  constructor(private poEntryServicesService:PoEntryServicesService,
    private router:Router, private route:ActivatedRoute, private builder:FormBuilder) { }

  ngOnInit() {
  }
  lunchselectedlist(event){
    let id="4f543dda-df4b-46ba-a759-85a05a406893"
    this.poEntryServicesService.PostLunchSelectedlist(id).subscribe(data => {

      console.log(data);

});
  }
}
