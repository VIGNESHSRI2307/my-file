import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  profileForm=new FormGroup({
    username: new FormControl(''),
    email:new FormControl('')
  })
  
  constructor(){
    // console.log(this.username.value)
  }
  title = 'my-file';
  onSubmit(){
    console.log("formsubmit")
    console.log(this.profileForm.value)
  }
  
}
