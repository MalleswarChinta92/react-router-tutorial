import React, { Component } from 'react';

class Course extends Component {

    render() {
        return (
            <div>
              <h1>Course Page</h1>
              <h3>{this.props.match.params.id}</h3>
              <p>{this.props.match.params.title}</p>
            </div>
          );        
    }
}

export default Course;
