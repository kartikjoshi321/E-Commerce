import { Component, OnInit } from '@angular/core';
import { AuthService } from  '../auth.service';
//import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-client-login',
  templateUrl: './client-login.component.html',
  styleUrls: ['./client-login.component.css']
})
export class ClientLoginComponent implements OnInit {

  constructor(private  authService:  AuthService) { }

  ngOnInit() {
  }
onSubmit(user){
console.log('user',user);
}
}
