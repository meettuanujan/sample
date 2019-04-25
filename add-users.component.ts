import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { FlowersService } from '../flowers.service';
import { User } from '../flowers';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {
  id = new FormControl('');
  username = new FormControl('');
  email = new FormControl('');

  flower: User[];

  constructor(private router: Router, public flowerService: FlowersService) {}

  ngOnInit() {}

  add1(id, username, email) {
    this.flowerService.addUser(id.value, username.value, email.value);
    this.router.navigate(['home']);
  }
}
