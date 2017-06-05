import React, { Component } from 'react';

class LocationList extends Component {
  render = () => (
      <div>
        {this.props.children}
      </div>
    )
}

export default LocationList;
