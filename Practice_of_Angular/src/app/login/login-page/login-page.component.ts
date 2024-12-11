import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit{

  myLoginForm!:FormGroup;

  constructor(private route: Router){}

  ngOnInit(): void {
    
    this.myLoginForm = new FormGroup({
      'username': new FormControl('', Validators.required),
      'emailId': new FormControl('', [Validators.email, Validators.required]),
      'password': new FormControl('', [Validators.required, this.customPasswordvalidator])
    });
  }

  submitForm(){
    let username = this.myLoginForm.get('username')?.value;
    let password = this.myLoginForm.get('password')?.value;
    let email = this.myLoginForm.get('emailId')?.value;

    console.log(username);
    console.log(password);
    console.log(email);

    this.route.navigate(["eventDetails", username]);
  }
 //if validation success then return null
 //or return true with this format->               //anymsg  : true
  customPasswordvalidator(control: FormControl): {[key: string]: boolean} | null {
    let givenPWD = control.value;
    if(givenPWD.startsWith('S') || givenPWD.startsWith('s')){
      return {'wrongPwd': true};
    }
    return  null;
  }

}
