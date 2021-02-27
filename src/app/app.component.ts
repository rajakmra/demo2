import { Component } from '@angular/core';
import {Student} from './newstudent';
import {FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
import {myvalid} from './myvalid.validator';
import {OwnerService} from './owner.service';
import { Owner } from './owner';
import {HttpClient} from '@angular/common/http';
import {MyRestService} from './my-rest.service';
@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html' ,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
/*   title:string = 'TechStack Technology';

  // usrname = new FormControl('Raja Kumar');

  regForm = new FormGroup({
    userid : new FormControl(102,[Validators.minLength(3),Validators.max(10)]),
    username : new FormControl('Vinith'),
    usercgpa : new FormControl(8.5)
  });

  setMyValues()
  {
    this.regForm.controls.userid.setValue(201);
  }

  data:number = 5;
  pi:number = 3.1415134;
  today:Date = new Date();
  
  salary:number = 25000;
  myfontcolor:string = 'blue';
  myfontsize:number = 30;

  showme:boolean=false;

  myneed:boolean =true;

  registration(mydata)
  {
    console.log(mydata.value);
  }
  showHide()
  {
    if(this.showme == true)
    {
      this.showme = false;
    } else
    {
      this.showme = true;
    }    
  }
  swithCssOnOff()
  {
    if(this.myneed == true)
    {
      this.myneed = false;
    } else
    {
      this.myneed = true;
    }
  }
  incFontSize()
  {

    this.myfontsize = this.myfontsize + 5;
  }
  decFontSize()
  {
    this.myfontsize = this.myfontsize - 5;
  }
  friends:string[] = ['Vinith','Bala','Vijay'];
  msg_to_child:string = 'Hello Child';

  s1:Student = new Student(1,'Vinith',8.6);
  s2:Student = new Student(2,'Kumar',7.6);
  s3:Student = new Student(3,'Iyyappan',7.2);

  myfrinends:Student[] = [this.s1,this.s2,this.s3];

  msg_from_child:string;

  receiveMessage(msg)
  {
    this.msg_from_child = msg;
  }

  receiveName(name:string)
  {
    this.friends.push(name);
  } 

  receiveStudent(s:Student)
  {
    this.myfrinends.push(s);
  }  */

  regForm = new FormGroup({
    userid : new FormControl(102,[Validators.minLength(3),Validators.max(10)]),
    username : new FormControl('Vinith'),
    usercgpa : new FormControl(8.5)
  });
  
/*   constructor(private fb:FormBuilder, private ownerserv: OwnerService)
  {

  }
 */

  result;
  constructor(private fb:FormBuilder, private serv: MyRestService)
  {
    //this.result = serv.returnRESTData();
  }

  // This for showing the error
  showerror;
  comp:boolean = false;

  getDataFromBackEnd()
  {
    this.serv.returnRESTData().subscribe((data) => {this.result = data; console.log('Data received')}, (err) => {this.showerror = err;console.log('Error received')}, () => { console.log(' REST Completed'); this.comp = true});
  }

  ownerNewServ:OwnerService = new OwnerService();
  ownerdata:Owner[];

  getDataFromDB()
  {
    //this.ownerdata = this.ownerserv.getOwners();
    this.ownerdata = this.ownerNewServ.getOwners();
  }
  
  myNewForm = this.fb.group({

    user_id : ['2001',[Validators.required,myvalid]],
    user_name : ['Vinith Kumar'],
    user_cgpa : ['8.9']

  });

  myRegForm = this.fb.group({
    id:[5],
    regno:[5001],
    stuname:["Vinith Kumar"],
    cgpa : [8.7]
  });


  s1:Student;

  resterror;
  flag=false;

  msg;
  
  addData()
  {
    this.s1 = new Student(this.myRegForm.controls.id.value,this.myRegForm.controls.regno.value,this.myRegForm.controls.stuname.value,this.myRegForm.controls.cgpa.value);
    this.serv.addDataToREST(this.s1).subscribe({
      error: err => {this.resterror=err;console.log(err.message);this.flag=true;},
      complete: () => {console.log('Completed'); this.msg = 'Registered Successfully'}
    });
  }

  updateData()
  {
    this.s1 = new Student(this.myRegForm.controls.id.value,this.myRegForm.controls.regno.value,this.myRegForm.controls.stuname.value,this.myRegForm.controls.cgpa.value);
    this.serv.updateDataToREST(this.myRegForm.controls.id.value,this.s1).subscribe({
      error: err => {this.resterror=err;console.log(err.message)},
      complete: () => {console.log('Completed'); this.msg = 'Updated Successfully'}
    });


  }

  deleteData()
  {
    this.serv.deleteDataInREST(this.myRegForm.controls.id.value).subscribe({
      error: err => {this.resterror=err;console.log(err.message)},
      complete: () => {console.log('Deleted'); this.msg = 'Deleted Successfully'}
    });
  }
  myJsonForm = this.fb.group({

    user_name : ['Vinith Kumar'],
    user_email : ['vinith@gmail.com']

  });
  myjson;
  myerror;


  getData()
  {
    this.serv.getDataFromJsonServer().subscribe(data=>{this.myjson=data;},err=>{this.myerror=err.message;console.log(this.myerror)},()=>{console.log("Completed")});
  }
  addDataToBackEnd()
  {

    this.serv.returnRESTData().subscribe((data) => {this.result = data; console.log('Data received')}, (err) => {this.showerror = err;console.log('Error received')}, () => { console.log(' REST Completed'); this.comp = true});
  }

  updateDataInBackEnd()
  {
    this.serv.returnRESTData().subscribe((data) => {this.result = data; console.log('Data received')}, (err) => {this.showerror = err;console.log('Error received')}, () => { console.log(' REST Completed'); this.comp = true});
  }


  deleteDataInBackEnd()
  {
    this.serv.returnRESTData().subscribe((data) => {this.result = data; console.log('Data received')}, (err) => {this.showerror = err;console.log('Error received')}, () => { console.log(' REST Completed'); this.comp = true});
  }




}
