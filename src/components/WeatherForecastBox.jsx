import React, { Component } from 'react';
import PropTypes from 'prop-types';

class WeatherForecastBox extends Component {
  boxStyle = {
    borderColor: 'silver',
    borderStyle: 'solid'
  }

  iconUrl = weatherStateAbbr => '/static/img/weather/png/64/' + weatherStateAbbr + '.png'

  render = () => (
    <div style={this.boxStyle}>
        {this.props.weather.applicable_date}
        <br/>
        <img src={this.iconUrl(this.props.weather.weather_state_abbr)} alt={this.props.weather.the_temp} />
        <br/>
        Wilgotność: {this.props.weather.humidity}
        <br/>
        Temp: {this.props.weather.min_temp} &gt; {this.props.weather.the_temp} &lt; {this.props.weather.max_temp}
    </div>
  )

  static propTypes = {
    weather: PropTypes.object.isRequired
  }
}

export default WeatherForecastBox;
