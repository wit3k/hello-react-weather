import React, { Component } from 'react';
import './App.css';
import LocationPicker from './components/LocationPicker'
import LocationListing from './components/LocationListing'
import LocationWeatherForecast from './components/LocationWeatherForecast'

class App extends Component {
  pickPosition = (pickedPosition) => (e) => this.setState({pickedPosition})

  // fetchLocationForPosition = (position) => fetch(metaWeatherDomain+)

  render = () => (
      <div className="App">
          <LocationPicker onDataFetch={this.pickPosition} />
          <LocationListing />
          <LocationWeatherForecast daysOfWeather={[]} />
      </div>
    )
}

export default App;
