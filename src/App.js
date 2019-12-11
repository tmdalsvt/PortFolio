import React, {Component} from 'react';
import Menu from './components/Menu/Menu';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

class App extends Component {
  render() {
    return (
      <div>
        {<Menu />}
        {<Home />}
        {<Profile />}
        {<Skills />}
        {<Projects />}
        {<Contact />}
      </div>
    );
  }
}

export default App;
