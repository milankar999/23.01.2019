import { Component, OnInit } from '@angular/core';
import { LoginSerivesService } from 'src/app/services/authentication/login-serives.service';
import{ Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
model:any={};
  constructor(private LoginServicesService:LoginSerivesService,private router:Router ){}
  ngOnInit() {
    //localStorage.removeItem('token');
    if(localStorage.getItem('token')!=null)
      this.router.navigate(['/crm/po-entry/customer-selection']);
     //console.log(localStorage.getItem('token'));
  }
  loginUser(event){

    this.LoginServicesService.getLoginDetails(this.model.inputUsername, this.model.inputPassword).subscribe(data => {
      alert('Your login as been success');
      localStorage.setItem('token', data.token);
      localStorage.setItem('hr_user_type', data.hr_user_type);
      this.router.navigate(['/crm/po-entry/customer-selection']);
      console.log(data);
      localStorage.setItem('crm/po-entry/customer-selection',this.model.inputUsername);
    
    },
    data=>{
      alert('wrong username, password');
    
    });
   
  }
    
}
