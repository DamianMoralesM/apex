import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  faqs: any = [];
  lastEdit: string = "";
  errorRead = false;
  private _jsonURL = 'assets/faq.json';

  constructor(private httpClient: HttpClient) { }
  ngOnInit() {
    this.httpClient.get(this._jsonURL).toPromise()
    .then((response: {data:[],lastEdit: string}) => {
      
      console.log(response)
        this.faqs = response.data;
        this.lastEdit = response.lastEdit;
    }).catch((err) => {
        console.log(err);
        this.errorRead = true;
    });
    
  }

}
