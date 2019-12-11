import React, {Component} from 'react';
import './Home.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      text:""
    }
  };

  componentDidMount() {
    let i =0;

    const typing = setInterval(() =>{
      const typed = this.state.text;
      const finalText= "PortFolio Page";

      if(i<finalText.length) {
        this.setState ({
          text: typed + finalText[i]
        });
        i++;

      } else {
        clearInterval(typing);
      }
    },140);
  }

  render() {
    return (
      <div className='header' id='main'>
        <div className='header_image'></div>
        <div className='header_text'>{this.state.text}</div>
      </div>
    );
  }
}

export default Home;
