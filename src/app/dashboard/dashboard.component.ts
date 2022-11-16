import { Component, OnInit } from '@angular/core';

export interface ProfileData{
  id: string;
  firstName:string;
  lastName: string;
  fullName: string;
  avatar:string;
  email:string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  profile!:ProfileData;
  constructor() {}

  ngOnInit() {
    const token = localStorage.getItem("g_token")
    const googleProfileData = this.decodeToken(token!)
    if(googleProfileData){
      this.profile = {
        avatar: googleProfileData["picture"],
        email: googleProfileData["email"],
        firstName: googleProfileData["given_name"],
        fullName: googleProfileData["name"],
        id: googleProfileData["sub"],
        lastName: googleProfileData["family_name"]
      }
    }
  }

  decodeToken(token: string) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
  }

  logout(){
    localStorage.removeItem("g_token")
    window.location.reload()
  }

}
