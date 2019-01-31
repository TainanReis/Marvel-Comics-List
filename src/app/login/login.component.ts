import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(){}
  ngOnInit(){
    if(!localStorage.getItem('state')){
      console.log('disconnected');
    } else {
      console.log(localStorage.getItem('state'));
    }
    document.getElementById('submitBtn').addEventListener('click', (event) => {
      event.preventDefault();
    })
  }
  confirmUser(email, password){
    // o ideal seria fazer a confirmação no servidor obtendo apenas a resposta
    let loginConfirmation = new Promise((resolve, reject) => {
      const apiUrl = 'https://5c4fc3efee97f60014047fee.mockapi.io/users';
      const request = new XMLHttpRequest();
      request.open('GET', apiUrl);
      request.responseType = 'json';
      request.onload = () => {
        resolve(loginParser(request.response, email, password));
      };
      request.send();
    });
    function loginParser(response, email, password){
      response.map((entry) => {
        if (entry.email === email){
          if (entry.password === password){
            localStorage.setItem('state', 'logged in');
            console.log('connected');
            location.reload(true);
          } else {
            console.log('wrong password');
          }
        } else {
          console.log('wrong email');
        }
      });
    }
  }
}
