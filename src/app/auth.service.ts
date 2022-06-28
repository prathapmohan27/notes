import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url="http://localhost:3000/api/login";

  constructor(private http:HttpClient,private route:Router,private helper:JwtHelperService) { }

login(user:any) {
    return this.http.post<any>(this.url,user)
}
loggedIn(){
  return !!localStorage.getItem('token');
}
getToken(){
  return localStorage.getItem('token')
}

getExpiration(){
   const expiration = this.getToken()||'';
  // const expiresAt = JSON.parse(atob(expiration.split('.')[1]));
  // const expTime=expiresAt.exp-expiresAt.iat;
  // setTimeout(()=>{
  //   this.route.navigate(['/login'])
  //   localStorage.removeItem('token');
  // },expTime*100)
  return this.helper.isTokenExpired(expiration);
} 
} 
