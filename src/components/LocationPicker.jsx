import React, { Component } from 'react';
import ReactCursorPosition from 'react-cursor-position';

class LocationPicker extends Component {
  trackPosition = e => this.setState({
    longtitude: this.calculateLongtitude(e),
    latitude: this.calculateLatitude(e)
  })

  calculateLongtitude = curPos =>
    180 * ((curPos.position.x - ((curPos.elementDimensions ? curPos.elementDimensions.width : 0) / 2)) / ((curPos.elementDimensions ? curPos.elementDimensions.width : 0) / 2))

  calculateLatitude = curPos =>
  -180 * ((curPos.position.y - ((curPos.elementDimensions ? curPos.elementDimensions.height : 0) / 2)) / ((curPos.elementDimensions ? curPos.elementDimensions.height : 0) / 2))

  render = () => (
    <div>
      <ReactCursorPosition onPositionChanged={this.trackPosition}>
        <WorldMap onDataFetch={this.props.onDataFetch(this.state)} longtitude={this.calculateLongtitude} latitude={this.calculateLatitude} />
      </ReactCursorPosition>
    </div>
    )
}

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
      <img alt="WorldMap" src="world-map-large.png" />
      <div style={this.badgeStyle()} onClick={this.props.onDataFetch}>
        Pozycja {this.props.longtitude(this.props)} : {this.props.latitude(this.props)}
      </div>
    </div>
  )
}

export default LocationPicker;
