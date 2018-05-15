import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { ClassInstance } from '../class-instance';

@Component({
  selector: '[app-class]',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {
  @Input() item: ClassInstance;
  @Input() number: number;
  @Output() removeItem = new EventEmitter<number>();
  @Output() saveItem = new EventEmitter<any>();
  isEdit = false;
  localItem = {};

  toggleEdit() {
    this.isEdit = !this.isEdit;
  }

  remove() {
    this.removeItem.emit(this.number - 1);
  }

  save() {
    this.isEdit = !this.isEdit;
    this.saveItem.emit({index: this.number - 1, newValue: this.localItem});
  }

  cancel() {
    this.localItem = Object.assign({}, this.item);
    this.isEdit = !this.isEdit;
  }

  constructor() { }

  ngOnInit() {
    this.localItem = Object.assign({}, this.item);

    if (!this.item.topic && !this.item.lecturer) {
      this.isEdit = true;
    }
  }
}
