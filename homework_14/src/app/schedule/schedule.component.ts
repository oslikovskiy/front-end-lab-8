import { Component, OnInit } from '@angular/core';
import { ClassInstance } from '../class-instance';
import { ClassesService } from '../classes.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  classes: ClassInstance[];

  onRemove(index: number) {
    this.classes.splice(index, 1);
    this.saveLocal();
  }

  addClass() {
    this.classes.push({
      topic: '',
      // Set Today as default date on create
      date: new Date().toISOString().substr(0, 10),
      lecturer: '',
    });

    this.saveLocal();
  }

  getClasses() {
    this.classes = this.classesService.getClasses();
  }

  onSave(item) {
    this.classes[item.index] = item.newValue;
    this.saveLocal();
  }

  saveLocal() {
    this.classesService.setClasses(this.classes);
  }

  constructor(private classesService: ClassesService) { }

  ngOnInit() {
    this.getClasses();
  }
}
