import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import Timeline from './Timeline'

import Logo from './components/Logo'
import Robot from './components/Robot'
import Button from './components/Button.js'
import SpeechBubble from './components/SpeechBubble'
import Ufo from './components/Ufo'
import PizzaShower from './components/PizzaShower'

export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>

        <Logo timeline={Timeline}/>

        <SpeechBubble timeline={Timeline}/>
        <Ufo timeline={Timeline}/>
        <PizzaShower timeline={Timeline}/>
        <Robot timeline={Timeline}/>
        <Button timeline={Timeline}/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'white',
  },

});
