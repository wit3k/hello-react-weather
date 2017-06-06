import React, { Component } from 'react';
import LocationRow from './LocationRow'

class LocationListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: []
    }
  }

  storeLocation = location => e =>
    this.setState({
      locations: [location, ...this.state.locations]
    })

  removeLocation = location => e =>
    this.setState({
      locations: this.state.locations.filter(_ => _.woeid !== location.woeid)
    })

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
