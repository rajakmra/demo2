import { Component, OnInit } from '@angular/core';
import { MyRestService } from '../my-rest.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor(private myser:MyRestService) { }

  result;
  ngOnInit() {
    this.myser.getDataFromJsonServer().subscribe({

      next: data => {this.result = data}
    });
  }

}
