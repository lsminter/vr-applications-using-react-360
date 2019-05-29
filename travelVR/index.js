import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-360';

export default class travelVR extends React.Component {
  render() {
    return (
      <View style={styles.mainView}>
        <Text style={styles.greetings}>Hello Egghead!</Text>
        <Text style={styles.greetings}>Hello again!</Text>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  mainView: {
    height: 600, 
    width: 600,
    padding: 10,
    backgroundColor: '#eee'
  },
  greetings: {
    fontSize: 40,
    width: '50%',
    marginTop: 5,
    backgroundColor: '#0298D0',
    color: 'white'
  }
});

AppRegistry.registerComponent('travelVR', () => travelVR);
