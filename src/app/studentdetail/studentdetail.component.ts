import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyRestService } from '../my-rest.service';

@Component({
  selector: 'app-studentdetail',
  templateUrl: './studentdetail.component.html',
  styleUrls: ['./studentdetail.component.css']
})
export class StudentdetailComponent implements OnInit {

  constructor(private myserv: MyRestService, private ar: ActivatedRoute) { }

  detail;

  inp;
  ngOnInit() {

    // snapshot way of get the param values
    //this.inp = this.ar.snapshot.paramMap.get('id')

    // observable way of get the param values
      this.ar.paramMap.subscribe(params => {
      this.inp = params.get('id');
      console.log(this.inp);
      this.myserv.getDataFromJsonServerById(this.inp).subscribe({
        next: data => {this.detail = data}
      });
    });
  }

}
