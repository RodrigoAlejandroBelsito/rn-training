import React from 'react';
import { View } from 'react-native';
import styles from './styles'

export default class Topic2 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.box, styles.box1]}/>
        <View style={[styles.box, styles.box2]}/>
        <View style={[styles.box3, styles.box]}/>
      </View>
    );
  }
}