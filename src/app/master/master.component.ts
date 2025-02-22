import { Component } from '@angular/core';
import { BookingComponent } from '../components/booking/booking.component';
import { CalenderComponent } from '../components/calender/calender.component';
import { WorkflowComponent } from '../components/workflow/workflow.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-master',
  imports: [BookingComponent, CalenderComponent, WorkflowComponent, CommonModule],
  templateUrl: './master.component.html',
  styleUrl: './master.component.css'
})
export class MasterComponent {

  currComponent: string = "calender";

  changeTab(tabName: string) {
    this.currComponent = tabName;
  }

}
