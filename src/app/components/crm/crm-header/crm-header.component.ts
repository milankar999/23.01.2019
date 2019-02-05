import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-crm-header',
  templateUrl: './crm-header.component.html',
  styleUrls: ['./crm-header.component.css']
})
export class CrmHeaderComponent implements OnInit {
  display='none';
  constructor(private router:Router, private cookie:CookieService) { }

  ngOnInit() {
 
  }
  logoutUser(event){
   
    localStorage.removeItem('token');
    localStorage.removeItem('type');
    this.cookie.deleteAll();
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
