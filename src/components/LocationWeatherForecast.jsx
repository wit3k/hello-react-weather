import React, { Component } from 'react';
import WeatherForecastBox from './WeatherForecastBox'
class LocationWeatherForecast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      forecast: {
        consolidated_weather: []
      }
    }
  }

  componentDidMount() {
    fetch('/api/location/' + this.props.location.woeid + '/')
      .then(_ => _.json())
      .then(forecast => this.setState({forecast}))
  }
  render = () => (
      <div>
        {this.state.forecast.consolidated_weather.map(day =>
          <WeatherForecastBox
            key={day.applicable_date}
            weather={day}
            location={this.props.location} />
        )}
      </div>
    )
}

export default LocationWeatherForecast;
