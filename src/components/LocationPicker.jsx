import React, { Component } from 'react';
import ReactCursorPosition from 'react-cursor-position';
import PropTypes from 'prop-types';
import WorldMap from './WorldMap'

class LocationPicker extends Component {
  trackPosition = e => this.setState({
    longtitude: this.calculateLongtitude(e),
    latitude: this.calculateLatitude(e)
  })

  calculateLongtitude = curPos =>
    180 * (
      (
        curPos.position.x - ((curPos.elementDimensions ? curPos.elementDimensions.width : 0) / 2)
      ) / (
        (curPos.elementDimensions ? curPos.elementDimensions.width : 0) / 2
      )
    )

  calculateLatitude = curPos =>
  -180 * (
    (
      curPos.position.y - ((curPos.elementDimensions ? curPos.elementDimensions.height : 0) / 2)
    ) / (
      (curPos.elementDimensions ? curPos.elementDimensions.height : 0) / 2
    )
  )

  render = () => (
    <div>
      <ReactCursorPosition onPositionChanged={this.trackPosition}>
        <WorldMap
          onDataFetch={this.props.onDataFetch(this.state)}
          longtitude={this.calculateLongtitude}
          latitude={this.calculateLatitude} />
      </ReactCursorPosition>
    </div>
  )

  static propTypes = {
    onDataFetch: PropTypes.func.isRequired
  }
}

export default LocationPicker;
