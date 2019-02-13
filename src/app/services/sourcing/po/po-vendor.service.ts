import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

//import interface data Type
import { CpoPendingDetails } from '../../../interface/sourcing/po/cpo-pending-details';

@Injectable({
  providedIn: 'root'
})
export class PoVendorService {

  constructor(private http: HttpClient) { }

//Sourcing CPO Pending Details GET Method
  getCPOPendingDetailsList(id):Observable<CpoPendingDetails[]>{
    return this.http.get<CpoPendingDetails[]>("/api/po_to_vendor/pending_po/"+id+"/lineitems_details/",
    
    {
      headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))// send to header
   });   
}
}
