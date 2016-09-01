import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';


@Component({
  selector: 'my-app',
  template: `<h1>My First Angular 2 App</h1>
    <div>Values: {{values.toString()}}</div>
      <div>Errors? {{anyErrors}}</div>
      <div>Finished? {{finished}}</div>
                <button (click)="run()">add</button>
             <ul>
                 <li *ngFor="let item of data | async"> {{ item }}</li>
            </ul>            
`
})
export class AppComponent implements OnInit {
  //list:Observable<Array<string>>;
  data: Observable<Array<number>>;
  values: number[] = [];
  anyErrors: boolean;
  finished: boolean;


  constructor() {
    //  this.list = Observable<Array<string>>;
    //  this.data = new Subject();

    this.data = new Observable(observer => {
      setTimeout(() => {
        observer.next([1,2,3]);
      }, 1000);
      setTimeout(() => {
        observer.next([4]);
      }, 2000);

      setTimeout(() => {
        observer.complete();
      }, 3000);
    });

    let subscription = this.data.flatMap( i => {
      let nn = i;
    }).subscribe(
      value => this.values.push(value),
      error => this.anyErrors = true,
      () => this.finished = true
    );

  }


  ngOnInit() {
    this.data.subscribe(val => {
      let i = val;
    });
  //  this.list = this.data.next('2');
  }

  private i = 0;

  run() {


  }


}
