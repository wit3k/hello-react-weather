import React, { Component } from 'react';
import './App.css';
import LocationPicker from './components/LocationPicker'
import LocationListing from './components/LocationListing'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pickedPosition: {
        longtitude: 0,
        latitude: 0
      },
      cities: []
    }
  }

  listCities = position => e => !position ? '' :
    fetch('/api/location/search/?lattlong=' + position.latitude + ',' + position.longtitude)
    .then(_ => _.json())
    .then(cities => this.setState({cities}))

  render = () => (
      <div className="App">
          <LocationPicker onDataFetch={this.listCities} />
          <LocationListing fetchedLocations={this.state.cities} />
      </div>
    )
}

export default App;
