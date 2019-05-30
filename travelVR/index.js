import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  asset
} from 'react-360';

export default class travelVR extends React.Component {
  render() {
    const { mainView, 
      text,
      flag
    } = styles;

    return (
      <View style={mainView}>
        <Image
          style={flag}
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/5/5a/Flag_of_Poland.jpg'
          }} />
        <Image style={flag} source={asset('flag_italy.png')} />
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
  },
  flag: {
    width: '50%',
    height: '40%'
  }
});

AppRegistry.registerComponent('travelVR', () => travelVR);
