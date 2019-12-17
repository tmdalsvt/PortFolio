import React, {Component} from 'react';
import Menu from './components/Menu/Menu';
import Home from './components/Home/Home';
import Career from './components/Career/Career';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

class App extends Component {
  render() {
    return (
      <div>
        {<Menu />}
        {<Home />}
        {<Career />}
        {<Skills />}
        {<Projects />}
        {<Contact />}
      </div>
    );
  }
}

export default App;
