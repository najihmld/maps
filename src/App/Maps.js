import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Button,
  ToastAndroid,
  TextInput,
  Text,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
// import InputLocation from './InputLocation.js';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

const Search = () => {
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
};

class Maps extends Component {
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
    const Link =
      'https://lifedeck.biz/wp-content/uploads/2017/12/map-marker-icon.png';
    return (
      <View style={styles.container}>
        <Search />
        <MapView
          ref="map"
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={{
            latitude: -6.6203231,
            longitude: 106.8184312,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}>
          <Marker
            coordinate={{
              latitude: -6.6203231,
              longitude: 106.8184312,
            }}>
            <Image source={{uri: Link}} style={{height: 30, width: 20}} />
          </Marker>
        </MapView>
      </View>
    );
  }
}

export default Maps;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  flatlist: {
    backgroundColor: 'white',
    margin: 2,
    padding: 2,
    borderRadius: 8,
    flexDirection: 'row',
  },
  textinput: {
    width: 300,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: 5,
    justifyContent: 'center',
  },
  inputMap: {
    position: 'absolute',
    zIndex: 100,
    top: 0,
    width: '100%',
  },
});
