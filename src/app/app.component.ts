import { Component } from '@angular/core';
import { IEmployee } from './IEmployee';
import { Employee } from './Employee';
import { DataService } from './services/data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstProject';

  constructor(private dataService: DataService) { }
  
  // msg:string = "Hello form app.componet.ts!";
  msg:any = {
    name:"Tim",
    age:25
  };

  // data:IEmployee[] = [
  //   {id:1, firstName:"AAA", lastName:"aaa",salary:10000},
  //   {id:1, firstName:"BBB", lastName:"bbb",salary:20000},
  //   {id:1, firstName:"CCC", lastName:"ccc",salary:30000}
  // ]

  employee:Employee = new Employee();

  url:string = "https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

  datetime:Date = new Date();

  display:boolean = true;
  theme:number = 0;

  onclick(){
    alert("Hi!");
  }

  // ondisplay(){
  //   alert("Hi!");
  // }

  onShow(){
    // if(this.display) this.display = false;
    // else this.display = true;
    this.display = !this.display;
  }

  onInput($event:any){
    if( $event.data != null ){
      this.msg = this.msg + $event.data;
    }
    else{
      // this.msg = $event.target.msg.value;
      //console.log();
    }
    
  }

  findAll(){
    console.log(this.employee.findAll());
  }

  onView(id:number){
    let emp = this.employee.findOne(id);
    alert(
      `
        ID:${emp?.id}
        First Name:${emp?.firstName}
        Last Name:${emp?.lastName}
        salary:${emp?.salary}
        
      `
    );
  }

  addEmp(){
    this.employee.insert(
      {
        id: this.employee.data.length,
        firstName: "NEW",
        lastName: "new",
        salary: 10000
      }
    );
  }

  onUpdate(empid:number){
    this.employee.update(
      {
        id: empid,
        firstName: "UPDATE",
        lastName: "update",
        salary: Math.floor(Math.random()*100)*1000
      }
    );
  }

}
