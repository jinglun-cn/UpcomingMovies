import React, { Component } from 'react';
import axios from 'axios';

export default class CreateTheater extends Component {
  constructor(props) {
    super(props);

    this.onChangeTheater = this.onChangeTheater.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      theater: ''
    }
  }

  onChangeTheater(e) {
    this.setState({
      theater: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const theater = {
      theater: this.state.theater
    }

    console.log(theater);

    axios.post('http://localhost:5000/theaters/add', theater)
      .then(res => console.log(res.data));

    this.setState({
      theater: ''
    });

    window.location = '/';
  }

  render() {
    return (
      <div>
        <h3>Add New Theater</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Theater: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.theater}
                onChange={this.onChangeTheater}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Add Theater" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}
