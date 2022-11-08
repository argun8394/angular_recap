import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  courses = [
    {id: 101, name: 'JavaScript for beginners', author: 'John Heikela', duration:48, type: 'Free', price:'0.00', image:'../../assets/courses/javascript.jpeg', description:'lorem ipsum dolor sit amet'},
    {id: 102, name: 'Angular for beginners', author: 'John Heikela', duration:36, type: 'Free', price:'0.00', image:'../../assets/courses/angular.png', description:'lorem ipsum dolor sit amet'},
    {id: 103, name: 'React for beginners', author: 'John Heikela', duration:65, type: 'Free', price:'0.00', image:'../../assets/courses/react.jpg',description:'lorem ipsum dolor sit amet'},
    {id: 104, name: 'HTML for beginners', author: 'John Heikela', duration:47, type: 'Free', price:'0.00', image:'../../assets/courses/HTML.jpg',description:'lorem ipsum dolor sit amet'},
    {id: 105, name: 'Advance React ', author: 'John Heikela', duration:65, type: 'Premium', price:'0.00', image:'../../assets/courses/react.jpg',description:'lorem ipsum dolor sit amet'},
    {id: 106, name: 'CSS for beginners', author: 'John Heikela', duration:56, type: 'Free', price:'0.00', image:'../../assets/courses/css.jpg',description:'lorem ipsum dolor sit amet'},
    {id: 107, name: 'Advance CSS ', author: 'John Heikela', duration:56, type: 'Free', price:'0.00', image:'../../assets/courses/css.jpg',description:'lorem ipsum dolor sit amet'},
    {id: 108, name: 'Advance HTML ', author: 'John Heikela', duration:47, type: 'Premium', price:'0.00', image:'../../assets/courses/HTML.jpg',description:'lorem ipsum dolor sit amet'},
  ]

  getTotalCourses() {
    return this.courses.length;
  }
  getTotalFreeCourses() {
    return this.courses.filter(course=> course.type === 'Free').length;
  }
  getTotalPremiumCourses() {
    return this.courses.filter(course=> course.type === 'Premium').length;
  }

}
