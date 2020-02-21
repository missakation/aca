import { Component, OnInit } from '@angular/core';
import { Courses } from '../models/courses';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  courses: Courses[];
  constructor() {



  }

  ngOnInit() {

    this.courses = [{
      id: 1,
      title: 'Java - Introduction',
      subtitle: 'Wow',
      description: 'viola'
    }, {
      id: 1,
      title: 'Java - Introduction',
      subtitle: 'Wow',
      description: 'viola'
    }]

  }

}
