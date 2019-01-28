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
    localStorage.removeItem('user');
  }
  login(){
    localStorage.setItem('home', this.model.inputUsername);
   

  }
  loginUser(event){

    this.LoginServicesService.getLoginDetails(this.model.inputUsername, this.model.inputPassword).subscribe(data => {
      alert('Your login as been success');
       localStorage.setItem('username', data.username);
      localStorage.setItem('password', data.password);
      this.router.navigate(['/crm/po-entry/customer-selection']);
      console.log(data);
    
    },
    data=>{
      alert('wrong username, password');
    
    });
   
  }
    
}
