import { Component, OnInit, Input, Output } from '@angular/core';
import { User } from '../flowers';
import { FlowersService } from '../flowers.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-flower-list',
  templateUrl: './flower-list.component.html',
  styleUrls: ['./flower-list.component.css']
})
export class FlowerListComponent implements OnInit {
  @Input() flower: User;

  @Output() deleteFlower: EventEmitter<User[]> = new EventEmitter();

  constructor(private flwr: FlowersService) {}

  selectedCust: User;

  onSelect(flower: User): void {
    this.selectedCust = flower;
  }

  ngOnInit() {}
  onDelete(flower) {
    this.deleteFlower.emit(flower);
  }
}
