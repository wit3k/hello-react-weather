import React, { Component } from 'react';
import LocationList from './LocationList/LocationList'
import LocationListActionKeep from './LocationList/Actions/LocationListActionKeep'
import LocationListActionForger from './LocationList/Actions/LocationListActionForget'

class LocationListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      storredLocations: []
    }
  }

  storeLocation = (location) => e => this.setState({storredLocations: [location, ...this.state.storredLocations]})

  removeLocation = (location) => e => this.setState({storredLocations: this.state.storredLocations.filter(_ => _.woeid != location.woeid)})

  render = () => (
      <div className="location-listing">
        <div className="left-collumn">
          <LocationList items={this.props.fetchedLocations} clickClick={this.storeLocation}>
            <LocationListActionKeep />
          </LocationList>
        </div>
        <div className="right-collumn">
          <LocationList items={this.state.storredLocations} clickClick={this.removeLocation}>
            <LocationListActionForger />
          </LocationList>
        </div>
      </div>
    )
}

export default LocationListing;
