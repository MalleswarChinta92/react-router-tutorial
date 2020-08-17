import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
import Course from './Course';

class Courses extends Component {
  state = {
    courses: [
        {id: 1, title: 'Hallelujah'},
        {id: 2, title: 'Amen'},
        {id: 3, title: 'Jehovah'}
    ]
}

render() {
    return (
        <div>
          <h1>Amazing courses</h1>
          {
              this.state.courses.map(course => {
                  return (
                      <Link key={course.id} to={this.props.match.url + '/' + course.id + '/' + course.title}>
                         <article>{course.title}</article> 
                      </Link>
                  )
              })
          }
          <Route path="/courses/:id/:title" component={Course} />
        </div>
      );
}
}

export default Courses;
