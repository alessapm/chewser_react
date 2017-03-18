import React, { Component } from 'react';
import UserLinks from './UserLinks';

export default class Nav extends Component {
  constructor() {
    super()

    this.state = {

      tagline: 'We Choose, You Eat'
    }
  }

  componentDidMount() {
    // const randomIndex = Math.floor(Math.random() * this.state.jokeNotebook.length);
    // this.setState({ tagline: this.state.jokeNotebook[randomIndex]});
  }

  render() {
    return(
      <div>
        <div className="header">
          <h1>Chewser</h1>
          <p className='tagline'>{this.state.tagline}</p>
          <UserLinks />
        </div>
      </div>
    )
  }

}
