import React, { Component } from 'react';
import WeatherForecastBox from './WeatherForecastBox'
class LocationWeatherForecast extends Component {
  render = () => (
      <div>
          <input type="date" />
          {this.props.daysOfWeather.map(day => <WeatherForecastBox day={day} />)}
      </div>
    )
}

export default LocationWeatherForecast;
