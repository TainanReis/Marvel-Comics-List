import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

    messages = [];
    resultsPerPage = 19;

  constructor() { }

  ngOnInit() {
    if (!window.indexedDB) {
      window.alert("Your browser doesn't support a stable version of IndexedDB.");
    }
    let listArray = {
      entry: []
    };
    let apiUrl = 'http://gateway.marvel.com/v1/public/comics?limit=100&apikey=db23efdc5669263db7c085760a4b3727';
    let request = new XMLHttpRequest();
    request.open('GET', apiUrl);
    request.responseType = 'json';
    request.send();

    request.onload = function (){
      let list = request.response;
      (list.data.results).map(entry => {
        let listObj = {title: '', thumbnail: '', description: ''};
        listObj.title = entry.title;
        listObj.thumbnail = entry.thumbnail;
        listObj.description = entry.description;
        listArray.entry.push(listObj);
      });
    };
    this.messages = listArray.entry;
  }
  increaseResults(){
    this.resultsPerPage += 19;
  }
  decreaseResults(){
    this.resultsPerPage -= 19;
  }
  addToCollection(title, description, thumbnail) {
    // yet to implement
    
  }
}
