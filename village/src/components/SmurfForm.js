import React, { Component } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";

import './SmurfForm.css'

const url = 'http://localhost:3333/smurfs'

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api

    //solution:
    
      // const { name, age, height }  = this.state;
      // const newSmurf = { name, age, height };

      const smurf = {
        name: this.state.name,
        age: this.state.age,
        height: this.state.height
      }
      axios
      .post(url, smurf)
      .then(response => {
        this.props.handleSubmit(response.data);
        this.setState({ name: '', age: '', height: '' });
      })
      .catch(err => console.log(err));

    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>

      <div className = "nav-button-container">
      <button> 
       <NavLink exact to = "/" activeClassName = "activeNavBUtton"> 
          Home
        </NavLink>
      </button>
      </div>
      </div>
    );
  }
}

export default SmurfForm;
