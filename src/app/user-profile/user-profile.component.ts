import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {

 user1 =  new User('Doe','John', 25,'', 'https://randomuser.me/api/portraits/lego/2.jpg');
 //buttonText: string | number = "Afficher/Masquer mon âge"
 Hidden: boolean = true;

  displayAge(){
        this.Hidden = !this.Hidden
  }

}