import { Component, OnInit, Output, EventEmitter } from '@angular/core';

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
    // it would be ideal to confirm at the server and get the answer
    let apiUrl = 'https://5c4fc3efee97f60014047fee.mockapi.io/users';
    let request = new XMLHttpRequest();
    request.open('GET', apiUrl);
    request.responseType = 'json';
    request.send();

    request.onload = function (){
      loginParser(request.response, email, password)
    };

    /* **************************** */
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
