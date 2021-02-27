import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {OnDestroy} from '@angular/core';
import { Student } from './student';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  @Input() msg_from_parent:string;

  msg_to_parent:string = 'Hello Parent';

  s:Student;

  @Output() outparam = new EventEmitter();

  sendMessage(data)
  {
    this.msg_to_parent = data;
    this.outparam.emit(this.msg_to_parent);
  }

  sendName(name:string)
  {
    this.outparam.emit(name);
  }

  sendStudent(p1:number, p2:string, p3:number)
  {
    this.s = new Student(p1,p2,p3);
    this.outparam.emit(this.s);
  }
  constructor() { }

  ngOnInit() {

  }

  ngOnDestroy(){

  }

}
