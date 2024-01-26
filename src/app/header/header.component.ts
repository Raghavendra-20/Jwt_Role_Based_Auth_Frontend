import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from '../_services/user-auth.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private userauthService:UserAuthService,
    private router:Router,
    public userService:UserService) { }

  ngOnInit(): void {
  }

  public isLogged(){
    return this.userauthService.isLoggedIn();
    //console.log(this.userauthService.isLoggedIn());
  }

  public logout(){
    this.userauthService.clear();
    this.router.navigate(['/home']);
  }
  
}
