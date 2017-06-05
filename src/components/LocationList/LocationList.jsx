import React, { Component } from 'react';

class LocationList extends Component {
  constructor(props) {
    super(props);
    this.props = {
      items: [],
      ...this.props
    }
  }

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

export default LocationList;
