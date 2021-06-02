import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import News from './components/News/News';

class App extends React.Component {
 
  render() {

    return (
      <Router>
        <div className="App">
          <Navbar></Navbar>
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home/>
              </Route>
              <Route path="/register">
                 <Register/> 
              </Route>
              <Route path="/news">
                  <News/>
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;