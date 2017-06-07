import React, { Component } from 'react';
import PropTypes from 'prop-types';

class WorldMap extends Component {
  badgeStyle = () => ({
    display: this.props.isPositionOutside ? 'hidden' : 'block',
    position:'absolute',
    left: this.props.position.x+'px',
    top: this.props.position.y+'px',
    backgroundColor: 'white',
    borderWidth: 2 + 'px',
    borderColor: 'silver',
    borderStyle: 'solid',
    padding: 15 + 'px'
  })

  render = () => (
    <div>
      <img
        alt="WorldMap"
        src="world-map-large.png" />
      <div
        style={this.badgeStyle()}
        onClick={this.props.onDataFetch}>
        Pozycja {this.props.longtitude(this.props)} : {this.props.latitude(this.props)}
      </div>
    </div>
  )

  static propTypes = {
    position: PropTypes.object,
    isPositionOutside: PropTypes.bool,
    longtitude: PropTypes.func.isRequired,
    latitude: PropTypes.func.isRequired
  }
}

export default WorldMap;
