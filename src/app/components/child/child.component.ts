import {Component, OnInit, Input} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subject} from "rxjs/Subject";
import 'rxjs/operators';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  title: string = "The ChildComponent Value is:";
  childValue: number = 0;

  @Input('myObs')
  theObservable: Observable<number>;

  constructor() {
  }

  ngOnInit() {
    this.theObservable.subscribe(value => {
      console.log("Next child value = " + value);
      this.childValue = value;
    });
  }

}
