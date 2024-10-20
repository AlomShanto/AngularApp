import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  hasAccount = true;

  changeAccountStatus(){
    this.hasAccount = !this.hasAccount;
  }
}
