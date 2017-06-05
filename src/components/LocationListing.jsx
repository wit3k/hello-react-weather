import React, { Component } from 'react';

class LocationRow extends Component {
  render = () => (
      <ul>
        {this.props.items.map(location =>
          <li key={location.woeid}>
            {location.title}
            <span onClick={this.props.clickClick(location)}>
              {this.props.children}
            </span>
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

  storeLocation = location => e => this.setState({locations: [location, ...this.state.locations]})

  removeLocation = location => e => this.setState({locations: this.state.locations.filter(_ => _.woeid !== location.woeid)})

  render = () => (
      <div className="location-listing">
        <div className="left-collumn">
          <LocationRow items={this.props.fetchedLocations} clickClick={this.storeLocation}>
            <span>+</span>
          </LocationRow>
        </div>
        <div className="right-collumn">
          <LocationRow items={this.state.locations} clickClick={this.removeLocation}>
            <span>x</span>
          </LocationRow>
        </div>
      </div>
    )
}

export default LocationListing;
