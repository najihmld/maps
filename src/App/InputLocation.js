import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

class InputLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapRegion: null,
      latitude: null,
      longitude: null,
    };
  }
  onRegionChange(region, latitude, longitude) {
    this.setState({
      mapRegion: region,
      // If there are no new values set the current ones
      latitude: latitude || this.state.latitude,
      longitude: longitude || this.state.longitude,
    });
  }
  render() {
    return (
      <View style={styles.inputMap}>
        <GooglePlacesAutocomplete
          placeholder="Enter Location"
          minLength={2}
          autoFocus={false}
          fetchDetails
          listViewDisplayed="auto"
          query={{
            key: 'AIzaSyB4gImziuuAtKMwAOLCvgZZBNK8fNJH6Js',
            language: 'en',
            types: 'geocode',
          }}
          currentLocation={false}
          onPress={(data, details = null) => {
            const region = {
              latitude: details.geometry.location.lat,
              longitude: details.geometry.location.lng,
              latitudeDelta: 0.00922 * 1.5,
              longitudeDelta: 0.00421 * 1.5,
            };
            this.onRegionChange(region, region.latitude, region.longitude);
          }}
        />
      </View>
    );
  }
}

export default InputLocation;

const styles = StyleSheet.create({
  inputMap: {
    position: 'absolute',
    zIndex: 100,
    top: 0,
    width: '100%',
  },
});
