import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//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
export class AppComponent
{
  public students:any = []

  public deleteStudent(roll:String)
  {
    this.students = this.students.filter((ob:any)=>ob.roll!=roll)
  }

  public send(frm:NgForm)
  {
    this.students.push(frm.value)
  }
}
