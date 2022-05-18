import React, { Component } from 'react';
import moment from 'moment';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Adrian Matos' Portfolio</h1>
        <div>{moment().format('YYYY-MM-DD,h:mm:a')}</div> 
      </div>
    );
  }
}
