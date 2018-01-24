import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subject} from "rxjs/Subject";
import 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My First Observable Demo';
  myObservable: Observable<number>;
  mySubject: Subject<number>;
  myCounter: number = 0;
  presentValue: number = 0;

  constructor() {
    this.mySubject = new Subject<number>();
    this.myObservable = this.mySubject.asObservable();
    this.myObservable.subscribe(value => {
      console.log("Next value = " + value);
      this.presentValue = value;
    });
  }

  updateCounter() {
    this.myCounter = this.myCounter + 1;
    this.mySubject.next(this.myCounter);
  }
}
