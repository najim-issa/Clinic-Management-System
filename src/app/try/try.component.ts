import { Component } from '@angular/core';

@Component({
  selector: 'app-try',
  templateUrl: './try.component.html',
  styleUrls: ['./try.component.css']
})
export class TryComponent {

  isMenuOpened: boolean =false;
  toggleMenu(): void  {
   this.isMenuOpened =!this.isMenuOpened;
  }

  clickOutside(): void  {
    this.isMenuOpened = false;
   }
}
