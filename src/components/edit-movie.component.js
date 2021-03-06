import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class EditMovie extends Component {
  constructor(props) {
    super(props);

    this.onChangeTheater = this.onChangeTheater.bind(this);
    this.onChangeMovie = this.onChangeMovie.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeRelease_date = this.onChangeRelease_date.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      theater: '',
      movie: '',
      duration: 0,
      release_date: new Date(),
      theaters: []
    }
  }

  componentDidMount() {
    axios.get('/movies/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          theater: response.data.theater,
          movie: response.data.movie,
          duration: response.data.duration,
          release_date: new Date(response.data.release_date)
        })
      })
      .catch(function (error) {
        console.log(error);
      })

    axios.get('/theaters/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            theaters: response.data.map(theater => theater.theater),
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }

  onChangeTheater(e) {
    this.setState({
      theater: e.target.value
    })
  }

  onChangeMovie(e) {
    this.setState({
      movie: e.target.value
    })
  }

  onChangeDuration(e) {
    this.setState({
      duration: e.target.value
    })
  }

  onChangeRelease_date(date) {
    this.setState({
      release_date: date
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const movie = {
      theater: this.state.theater,
      movie: this.state.movie,
      duration: this.state.duration,
      release_date: this.state.release_date
    }

    console.log(movie);

    axios.post('/movies/update/' + this.props.match.params.id, movie)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>Edit Movie Log</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label>Theater: </label>
          <select ref="theaterInput"
              required
              className="form-control"
              value={this.state.theater}
              onChange={this.onChangeTheater}>
              {
                this.state.theaters.map(function(theater) {
                  return <option
                    key={theater}
                    value={theater}>{theater}
                    </option>;
                })
              }
          </select>
        </div>
        <div className="form-group">
          <label>Movie: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.movie}
              onChange={this.onChangeMovie}
              />
        </div>
        <div className="form-group">
          <label>Duration (in minutes): </label>
          <input
              type="text"
              className="form-control"
              value={this.state.duration}
              onChange={this.onChangeDuration}
              />
        </div>
        <div className="form-group">
          <label>Release date: </label>
          <div>
            <DatePicker
              selected={this.state.release_date}
              onChange={this.onChangeRelease_date}
            />
          </div>
        </div>

        <div className="form-group">
          <input type="submit" value="Edit Movie Entry" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}
