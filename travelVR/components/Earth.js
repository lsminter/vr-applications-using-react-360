import React from 'react';
import {asset, View} from 'react-360';
import Entity from 'Entity';
import AmbientLight from 'AmbientLight';
import PointLight from 'PointLight';

export default class Earth extends React.Component{
  render() {
    return (
      <View>
        <AmbientLight intensity={1.0} color={'#fff'} />
        <PointLight intensity={1.0} color={'#fff'} style={{
          transform: [
            {translate: [0, 0, 20]}
          ]
        }}/>
        <Entity source={{gltf2: asset('Earth.gltf') }} style={{
          transform: [
            {scale: 0.003},
            {rotateY: 120},
            {rotateX: -30}
          ]
        }} />
      </View>
    )
  }
}