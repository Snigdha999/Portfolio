import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserDetailsComponent } from '../user-details/user-details.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  constructor(private dialog:MatDialog){}

  openDialog() {
    this.dialog.open(UserDetailsComponent,{width:'lg'});
  }
}
