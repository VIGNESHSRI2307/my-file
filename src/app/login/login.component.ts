import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators,FormBuilder } from '@angular/forms';
import {MessageService} from '../message.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // profileForm=new FormGroup({
  //   username: new FormControl(''),
  //   email:new FormControl('')
  // })
  submitted=false
  constructor(private Fb:FormBuilder,private msg:MessageService) {  
}
profileForm=this.Fb.group({
  username:['',Validators.required],
  email:['',[Validators.required,Validators.email]]
})
title = 'my-file';
onSubmit(){
  this.submitted=true
  console.log(this.profileForm.valid)
  if (this.profileForm.valid){console.log(this.profileForm.value)}
  else {
      alert("username,eamil,required")
  }
}
get profileFormControl() {
  return this.profileForm.controls;

}
onclicked(){
  alert(this.msg.getMessage())
}

  ngOnInit(): void {
  }
  

}
