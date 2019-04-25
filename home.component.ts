import { Component, OnInit, Input, Output } from '@angular/core';
import { User } from '../flowers';
import { FlowersService } from '../flowers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchText;
  @Input() username: User;

  flowers: User[];

  constructor(private flwr: FlowersService, private router: Router) {}

  ngOnInit() {
    this.flwr.getFlowers().subscribe(flowers => {
      this.flowers = flowers;
    });
  }
  deleteFlower(flower: User) {
    this.flowers = this.flowers.filter(t => t.id !== flower.id);
  }

  addUser(): void {
    this.router.navigate(['add-users']);
  }
}
