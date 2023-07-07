import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MoreDetailsComponent } from '../more-details/more-details.component';

@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.css']
})
export class PatientDashboardComponent {
  
  constructor (private _dialog: MatDialog){}

  openAddEditPdetails(){
    this._dialog.open(MoreDetailsComponent);
  }

}
