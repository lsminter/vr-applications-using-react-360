import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-360';

export default class travelVR extends React.Component {
  render() {
    const { mainView, 
      menuItem,
      poland,
      ukraine, 
      uk, 
      spain, 
      italy, 
      greece,
      redText
    } = styles;

    return (
      <View style={mainView}>
        <Text style={[menuItem, poland]}>Poland</Text>
        <Text style={[menuItem, ukraine]}>Ukraine</Text>
        <Text style={[menuItem, uk]}>Great Britain</Text>
        <Text style={[menuItem, spain]}>Spain</Text>
        <Text style={[menuItem, italy, redText]}>Italy</Text>
        <Text style={[menuItem, greece]}>Greece</Text>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  mainView: {
    height: 600, 
    width: 600,
    padding: 10,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center'
  },
  menuItem: {
    fontSize: 40,
    width: '30%',
    marginTop: 5,
    backgroundColor: '#0298D0',
    color: 'white'
  }
});

AppRegistry.registerComponent('travelVR', () => travelVR);
