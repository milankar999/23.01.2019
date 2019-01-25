import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotation-selection-details',
  templateUrl: './quotation-selection-details.component.html',
  styleUrls: ['./quotation-selection-details.component.css']
})
export class QuotationSelectionDetailsComponent implements OnInit {

 query:string='';
 quotationlist=[
   {id:1, name:"handlingTool",description:"fdgbdrvfdc",model:"fvg",brand:"ferg",partno:2,productcode:55,hsncode:63,gst:20,uom:3,price:6000},
   {id:2, name:"cuttingtool",description:"fdgbdrvfdc",model:"fvg",brand:"ferg",partno:2,productcode:55,hsncode:63,gst:20,uom:3,price:6000},
  {id:3, name:"handlingTool",description:"fdgbdrvfdc",model:"fvg",brand:"ferg",partno:2,productcode:55,hsncode:63,gst:20,uom:3,price:6000},  ]

 
  constructor() { }

  ngOnInit() {
  }

}
