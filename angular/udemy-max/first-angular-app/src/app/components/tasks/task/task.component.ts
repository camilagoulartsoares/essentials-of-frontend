import { Component, Input } from '@angular/core';
import { Task } from './tasks.mode';


@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;

  ngOnInit(){
    console.log(this.task)
  }
}
