import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LocationPicker from './components/LocationPicker'
import LocationListing from './components/LocationListing'
import LocationWeatherForecast from './components/LocationWeatherForecast'

class App extends Component {
  render = () => (
      <div className="App">
          <LocationPicker />
          <LocationListing />
          <LocationWeatherForecast daysOfWeather={[]} />
      </div>
    )
}

export default App;
