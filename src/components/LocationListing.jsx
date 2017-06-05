import React, { Component } from 'react';
import LocationWeatherForecast from './LocationWeatherForecast'

class LocationRow extends Component {
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
}

class LocationListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: []
    }
  }

  storeLocation = location => e =>
    this.setState({locations: [location, ...this.state.locations]})

  removeLocation = location => e =>
    this.setState({locations: this.state.locations.filter(_ => _.woeid !== location.woeid)})

  render = () => (
      <div className="location-listing">
        <div className="left-collumn">
          <LocationRow
            items={this.props.fetchedLocations}
            clickClick={this.storeLocation}
            clickClickIcon="+"
            clickClickIconColor="blue" />
        </div>
        <div className="right-collumn">
          <LocationRow
            items={this.state.locations}
            clickClick={this.removeLocation}
            clickClickIcon="x"
            clickClickIconColor="red" />
        </div>
      </div>
    )
}

export default LocationListing;
