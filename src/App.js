import React from 'react';
import Nav from './Nav'
import Users from './Users'
import Courses from './Courses'

import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          {/* <Route path="/courses/:id/:title" component={Course} /> */}
          <Route path="/courses" component={Courses} />
          <Route path="/users" component={Users} />
          <Redirect from="/all-courses" to="/courses" />
          <Route render={() => <h1>Not Found</h1>} />
        </Switch>
      </div>
    </Router>
  );
}



export default App;
