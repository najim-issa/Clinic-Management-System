import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { DetailsService } from '../services/details.service';

@Component({
  selector: 'app-more-details',
  templateUrl: './more-details.component.html',
  styleUrls: ['./more-details.component.css']
})
export class MoreDetailsComponent implements OnInit{

empForm : FormGroup;
  private _dialog: any;

constructor(private _fb: FormBuilder, private _detailsServices: DetailsService,
 ){
  this.empForm = this._fb.group({
    firstName:'',
    lastName:'',
    email:'',
    address:'',
    gender:'',
    phonenumber:'',
    epnumber:'',
    dob:'',
    state:'',
    
  })
}

ngOnInit(): void {
    this.empForm.patchValue;
}
onFormSubmit(){
  if (this.empForm.valid){
    // console.log(this.empForm.value);
    this._detailsServices.addDetails(this.empForm.value).subscribe({
      next :(val:any)=>{
alert('Details Inserted Successful');

      },
      error:(err:any)=>{
        console.error(err);
      },
    });
  }
}

openAddEditPdetails(data : any){
  this._dialog.open(MoreDetailsComponent, {
    data,
  });
}

}
