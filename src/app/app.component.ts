import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  language: string = "";
  data: any = {
    items: [{
      "id": 121395510,
      "name": "CS-Notes",
      "language": "Java"
    },
    {
      "id": 132464395,
      "name": "JavaGuide",
      "language": "Java"
    },
    {
      "id": 22790488,
      "name": "java-design-patterns",
      "language": "Java"
    }]
  }

  constructor(private http: HttpClient) { }

  searchAndCreateLanguage() {
    this.http.post("https://github-ateliware.herokuapp.com/repository", {
      language: this.language
    }).subscribe(response => {
      this.data = response;
    })
  }
}

