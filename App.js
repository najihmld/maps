import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import MapScreen from './src/App/Maps';

class HomeScreen extends React.Component {
  onMaps = () => {
    this.props.navigation.navigate('Maps');
  };
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          keyboardType="Password"
        />
        <TouchableOpacity onPress={() => this.onMaps()}>
          <Text style={styles.button}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    title: 'Skyjack',
    headerStyle: {
      backgroundColor: 'blue',
    },
  },
  Maps: {
    screen: MapScreen,
    navigationOptions: {
      title: false,
      header: false,
    },
  },
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    backgroundColor: '#eaeaea',
    padding: 10,
    borderRadius: 5,
    margin: 5,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    margin: 5,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    color: '#fff',
    borderRadius: 5,
  },
});

export default createAppContainer(AppNavigator);
