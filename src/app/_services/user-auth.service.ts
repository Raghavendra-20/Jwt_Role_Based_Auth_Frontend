import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor() { }

  public setRoles(roles: []) {
    localStorage.setItem('roles', JSON.stringify(roles));
  }

  public getRoles(): [] {
    let role =localStorage.getItem('roles');
    let erro : [] = []
    if(role == null || role == undefined ){
      return erro;
    }else{
      return JSON.parse(role);
    }
    
  }

  public setToken(jwtToken: string) {
    localStorage.setItem('jwtToke', jwtToken);
  }

  public getToken(): string {
    const tok = localStorage.getItem('jwtToke');
    if(tok!=null){
      return tok;
    }else{
      return "";
    }
  }

  public clear() {
    localStorage.clear();
  }

  public isLoggedIn():boolean  {
    const jwtToken = this.getToken();
    const roles = this.getRoles();

    return !! jwtToken && roles.length>0;
  }
}
