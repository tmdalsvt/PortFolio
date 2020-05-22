import React, {Component} from 'react';
import axios from 'axios';
import './Contact.css';
import {Container, Row, Col} from '../../../node_modules/react-bootstrap';
import Email from './img/Email.svg';
import Github from './img/Github.png';
import Blog from './img/Blog.png';

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {name: '', comment: ''};
    this.state = {
      posts: [],
      keys: []
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleCommentChange = this.handleCommentChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {

    this.fetchPosts();
  }

  handleNameChange(event) {
    this.setState({name: event.target.value});
  }

  handleCommentChange(event) {
    this.setState({comment: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    let today = new Date();

    axios.post('https://portfolio-51572.firebaseio.com/Comment.json',
    {
      name: this.state.name,
      comment: this.state.comment,
      date: today
    })
    .then(response => {
      this.fetchPosts();
      document.getElementById('input_name').value = '';
      document.getElementById('input_comment').value = '';
    })
    .catch(error => {
      console.log(error);
    });
  }

  fetchPosts() {
    axios.get('https://portfolio-51572.firebaseio.com/Comment.json')
    .then(response => {
      let key = Object.keys(response.data);
      let item = Object.values(response.data);
      this.setState({posts: item})
      this.setState({keys: key})
    })
    .catch(error => {
      console.log(error);
    });
  }

  renderPosts() {
    let post_item = this.state.posts;
    let num = 0
    return post_item.map((post) => {
      return (
        <tr key={post.date}>
          <th className="table-head" scope="row">{num += 1}</th>
          <td>{post.name}</td>
          <td>{post.comment}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div className='Contact' id='contact'>
        <div className='Contact_Title'>
          <h1 className="Main_Title">Contact</h1>
        </div>
        <Container>
          <div>
            <Row>
              <Col>
                <h6>Comment</h6>
                <Row>
                  <Col>
                    <table className="table table-hover table-light">
                      <thead>
                        <tr>
                          <th className="table-head" scope="col">No</th>
                          <th className="table-head" scope="col">Name</th>
                          <th className="table-head" scope="col">Comment</th>
                        </tr>
                      </thead>
                      <tbody className="content-text">
                        {this.renderPosts()}
                      </tbody>
                    </table>
                  </Col>
                </Row>
                <form onSubmit={this.handleSubmit}>
                  <Row>
                    <Col md="4">
                      <div className="input-group">
                        <input type="text" id="input_name" className="form-control" placeholder="Name" onChange={this.handleNameChange} maxLength="20" />
                      </div>
                    </Col>
                    <Col md="8">
                      <div className="input-group">
                        <input type="text" id="input_comment" className="form-control" placeholder="Comment" aria-label="Comment" onChange={this.handleCommentChange} maxLength="200" />
                        <span className="input-group-btn">
                          <button className="btn btn-secondary btn-comment" type="submit" value="Submit">Submit</button>
                        </span>
                      </div>
                    </Col>
                  </Row>
                </form>
              </Col>
              <Col>
                <div className="Info">
                  <h4 className="Info_Content">EMAIL<span className="Period_Mark">.</span>
                    <a href="mailto:tmdalsvt@gmail.com"><img src={Email} className="Image"/></a>
                  </h4>
                </div>
                <div className="Info">
                  <h4 className="Info_Content">GITHUB<span className="Period_Mark">.</span>
                    <a href="https://github.com/tmdalsvt/"><img src={Github} className="Image"/></a>
                  </h4>
                </div>
                <div className="Info">
                  <h4 className="Info_Content">BLOG<span className="Period_Mark">.</span>
                    <a href="https://blog.naver.com/lee012500"><img src={Blog} className="Image"/></a>
                  </h4>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}

export default Contact;
