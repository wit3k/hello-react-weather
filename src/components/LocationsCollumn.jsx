import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LocationWeatherForecast from './LocationWeatherForecast'

class LocationsCollumn extends Component {
  render = () => (
    <ul>
      {this.props.items.map(location =>
        <li key={location.woeid}>
          <h1>{location.title}</h1>
          <span
            onClick={this.props.clickClick(location)}
            style={({color: this.props.clickClickIconColor})}>
            {this.props.clickClickIcon}
          </span>
          <LocationWeatherForecast location={(location)} />
        </li>
      )}
    </ul>
  )

  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired
  }
}

export default LocationsCollumn;
