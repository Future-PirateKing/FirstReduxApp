import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

interface App {
  hello: string;
}

@Component({
  selector: 'app-simple-app',
  templateUrl: './simple-app.component.html',
  styleUrls: ['./simple-app.component.css']
})
export class SimpleAppComponent implements OnInit {

  message$: Observable<string>;
  message: any;

  constructor(private store: Store<App>) {
   this.store.select('hello').subscribe(message => {
     this.message = message;
     console.log(message);
   });
  }

  ngOnInit() {
  }

  malvikaMessage() {
    this.store.dispatch({type: 'MALVIKA'});
  }

  rheaMessage() {
    this.store.dispatch({type: 'RHEA'});
  }

  keyurMessage() {
    this.store.dispatch({type: 'KEYUR'});
  }

  ashwitaMessage() {
    this.store.dispatch({type: 'ASHWITA'});
  }

}
