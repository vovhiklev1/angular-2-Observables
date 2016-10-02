import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';


import * as rx from "rxjs/Rx";
import {BehaviorSubject, Subject} from "rxjs/Rx";

@Component({
  selector: 'my-app',
  template: `<h1>My First Angular 2 App</h1>
                 
`
})
export class AppComponent implements OnInit {

  msg:Subject<any> = new Subject<any>();

  constructor() {
  }


  ngOnInit() {


    let s = rx.Observable.of(1, 2, 3, 4).finally(()=> {
      debugger
    });
    // let s = rx.Observable.throw(new Error('err'));
    // let p = rx.Observable.range(4,5);
    // let p = s.publish();

    // let s = rx.Observable.from([1,2,3,4]);
    /* var arrayLike = new Map([['name1', 1], ['name2', 2]]);
     var s = rx.Observable.from(arrayLike);*/
    //let s = rx.Observable.from([1,2,3,4]);
    /* let s = rx.Observable.create(obs => {
     setTimeout(()=> {
     obs.next('test');
     }, 1000);

     setTimeout(()=> {
     obs.next('2');
     }, 2000);

     })*/

    /*    p.subscribe(val => {
     debugger
     }, (err)=>{
     debugger
     }, ()=>{
     debugger
     });

     setTimeout(()=> {
     debugger
     // p.connect();
     }, 1000);

     setTimeout(()=> {
     p.subscribe(val => {
     debugger
     }, (err)=>{
     debugger
     }, ()=>{
     debugger
     });
     }, 4000);*/

    s.flatMap(val=> {
      return rx.Observable.of(val)
    }).subscribe(val => {
      debugger
    })


  }

}
