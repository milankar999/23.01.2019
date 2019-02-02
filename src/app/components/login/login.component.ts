import { Component, OnInit } from '@angular/core';
import { LoginSerivesService } from 'src/app/services/authentication/login-serives.service';
import{ Router } from '@angular/router';
import{ HttpResponse} from '@angular/common/http';
import { getViewData } from '@angular/core/src/render3/state';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
model:any={};
  constructor(private LoginServicesService:LoginSerivesService,
    private router:Router ){}
  ngOnInit() {
    //localStorage.removeItem('token');
    if(localStorage.getItem('token')!=null)
      this.router.navigate(['/crm/po-entry/customer-selection']);
     //console.log(localStorage.getItem('token'));
  }
  loginUser(event){

    this.LoginServicesService.getLoginDetails(this.model.inputUsername, this.model.inputPassword).subscribe(data => {
      console.log(data);
      alert('Your login as been success');
      localStorage.setItem('token', data.token);
      localStorage.setItem('type', data.type);
      if(data.type=="CRM")
        this.router.navigate(['/crm/po-entry/customer-selection']);
      else if(data.type=="Sourcing")
        this.router.navigate(['/crm/po-entry/customer-selection']);
      else if(data.type=="Sales")
        this.router.navigate(['/crm/po-entry/customer-selection']);
      localStorage.setItem('crm/po-entry/customer-selection',this.model.inputUsername);
    
    },
    data=>{
      alert('wrong username, password');
    
    });
   
  }
    
}
