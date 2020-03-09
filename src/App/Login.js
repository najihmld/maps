import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';

import 'react-native-gesture-handler';

class App extends Component {
  state = {
    email: '',
    password: '',
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
        <TouchableOpacity>
          <Text style={styles.button}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

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

export default App;
