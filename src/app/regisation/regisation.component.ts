import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-regisation',
  templateUrl: './regisation.component.html',
  styleUrls: ['./regisation.component.css']
})
export class RegisationComponent implements OnInit {
    // profileForm=new FormGroup({
    //   username: new FormControl(''),
    //   email:new FormControl('')
    // })
    submitted=false
    constructor(private Fb:FormBuilder) {  
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
  
    ngOnInit(): void {
    }
    
  
  }
