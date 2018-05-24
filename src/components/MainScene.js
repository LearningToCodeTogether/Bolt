import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

import Robot from './Robot'
import SpeechBubble from './SpeechBubble'
import Button from './Button'
import Ufo from './Ufo'

const BoltLines = [
  'Hi there! I am Bolt',
  'I can measure your battery!',
  '54%',
  'I love pizza! Can I have some?',
]

export default class MainScene extends PureComponent {
  render(){
    return (
      <View style={styles.container}>
        {/* Top */}
        <View style={[styles.section, styles.alignToBottom]}>
          {/*<SpeechBubble text={BoltLines[4]}/>*/}
        </View>


        {/* Center */}
        <View style={styles.section}>
          <Ufo/>
          <Robot
            blink={true}/>
        </View>


        {/* Bottom */}
          <Button/>
      

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 1,
  },
  alignToBottom: {
    justifyContent: 'flex-end',
    paddingBottom: 20,
  }
})
