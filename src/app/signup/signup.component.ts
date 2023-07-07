import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  empForm1 : FormGroup;

  constructor(private _fb: FormBuilder, private _registrationService: RegistrationService,
    ){
     this.empForm1 = this._fb.group({
       email:'',
       password:'',
       repeatPassword:'',
       
     })
   }
   onFormSubmit(){
    if (this.empForm1.valid){
      // console.log(this.empForm.value);
      this._registrationService.addSignup(this.empForm1.value).subscribe({
        next :(val:any)=>{
         alert('Details Inserted Successful Please click Sign In');
  
        },
        error:(err:any)=>{
          console.error(err);
        },
      });
    }
  
}
}