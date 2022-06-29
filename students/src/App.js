import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import StudentList from './components/StudentList';
import { Component } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="menu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About Us</Link>
            </li>
            <li>
              <Link to="/Contact">Contact Us</Link>
            </li>
          </ul>
          <div className="student-container">
            <StudentList />
          </div>
        </div>
        <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route exact path='/About' element={< About />}></Route>
          <Route exact path='/Contact' element={< Contact />}></Route>
        </Routes>
      </Router>
    );
  }
}

export default App;
