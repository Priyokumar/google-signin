import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  signedIn = false;

  constructor(private router: Router){}

  ngOnInit(): void {
    if(localStorage.getItem("g_token")){
      this.signedIn = true;
      this.router.navigate(["dashboard"])
    } else{
      this.router.navigate([""])
    }
  }
}
