import React, { Component } from 'react';
import LocationList from './LocationList/LocationList'
import LocationListActionKeep from './LocationList/Actions/LocationListActionKeep'
import LocationListActionForger from './LocationList/Actions/LocationListActionForget'

class LocationListing extends Component {
  render = () => (
      <div className="location-listing">
        <div className="left-collumn">
          <LocationList>
            <LocationListActionKeep />
          </LocationList>
        </div>
        <div className="right-collumn">
          <LocationList>
            <LocationListActionForger />
          </LocationList>
        </div>
      </div>
    )
}

export default LocationListing;
