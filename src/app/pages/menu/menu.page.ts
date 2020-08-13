import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  selectedPath = '';
  pages = [
    {
    title: "Payments",
    url: '/menu/payment'
    },
    {
      title: "Employees",
      url: '/menu/employees'
    }
  ];
  constructor(
    private router: Router,
  ) {
  }

  ngOnInit() {
  }

  logout(){
    this.router.navigate(['']);
  }

}
