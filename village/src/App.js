import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

const url = 'http://localhost:3333/smurfs'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      name: '',
      age: '',
      height: ''
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

//Pulling in data from server

componentDidMount() {
  axios
  .get(url)
  .then((response) => this.setState({smurfs: response.data }))
  .catch(error => console.error(error))
}

newSmerfHandler = () => {
  const smurf = {
    name: this.state.name,
    age: this.state.age,
    height: this.state.height
  }
  axios
  .post(url, smurf)
  .then(response => this.setState({ smurfs: response.data, name: '', age: '', height: '' }))
  .catch(err => console.log(err));
}

  render() {
    return (
      <div className="App">
        <SmurfForm />
        <Smurfs smurfs={this.state.smurfs} />
      </div>
    );
  }
}

export default App;
