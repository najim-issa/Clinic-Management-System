import { Component, Inject } from '@angular/core';
import { MatDialogModule, MatDialog, MAT_DIALOG_DATA, } from '@angular/material/dialog';
import { ContactusComponent } from './contactus/contactus.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web';

  constructor(private dialogRef: MatDialog) {}

 openDialog(){
  this.dialogRef.open(ContactusComponent);
 }
 isMenuOpened: boolean =false;
 toggleMenu(): void  {
  this.isMenuOpened =!this.isMenuOpened;
 }
}
