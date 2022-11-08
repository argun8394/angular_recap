import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses = [
    {id: 101, name: 'JavaScript for beginners', author: 'John Heikela', duration:48, type: 'Free', price:'0.00', image:'../../assets/courses/javascript.jpeg', description:'lorem ipsum dolor sit amet'},
    {id: 102, name: 'Angular for beginners', author: 'John Heikela', duration:36, type: 'Free', price:'0.00', image:'../../assets/courses/angular.jpg', description:'lorem ipsum dolor sit amet'},
    {id: 103, name: 'React for beginners', author: 'John Heikela', duration:65, type: 'Free', price:'0.00', image:'../../assets/courses/react.jpg',description:'lorem ipsum dolor sit amet'},
    {id: 104, name: 'HTML for beginners', author: 'John Heikela', duration:47, type: 'Free', price:'0.00', image:'../../assets/courses/HTML.jpg',description:'lorem ipsum dolor sit amet'},
    {id: 105, name: 'CSS for beginners', author: 'John Heikela', duration:56, type: 'Free', price:'0.00', image:'../../assets/courses/css.jpg',description:'lorem ipsum dolor sit amet'},
    {id: 106, name: 'C# for beginners', author: 'John Heikela', duration:48, type: 'Free', price:'0.00', image:'../../assets/courses/c#.jpg',description:'lorem ipsum dolor sit amet'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
