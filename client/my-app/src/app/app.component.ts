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
  private _jsonURL = 'assets/faq.json';

  constructor(private httpClient: HttpClient){}
  ngOnInit(){
    this.httpClient.get(this._jsonURL).subscribe(data =>{
      console.log(data);
      this.faqs = data;
    })
  }
  
}
