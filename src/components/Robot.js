import React, { PureComponent } from 'react'
import { View, Text, Button, StyleSheet, Image, Dimensions } from 'react-native'

import Eye from './Eye'
import Heart from './Heart'
import * as Animatable from 'react-native-animatable'


export default class Robot extends PureComponent {
  state = {
    hidden: true,
    hearts: [],
    count: 0,
  }

  componentDidMount(){
    const { timeline } = this.props
    timeline.on('robot.show', this.show)
    timeline.on('robot.heart', this.fadeOutHeart)
  }

  fadeOutHeart = () => {
    const list = [...this.state.hearts]
    list.push(this.state.count)

    this.setState({
      hearts: list,
      count: this.state.count + 1,
    })
  }

  show = () => {
    this.setState({ hidden: false, animation: 'fadeIn' })
  }

  render(){
    const { animation, hidden, hearts } = this.state
    console.log('hearts', hearts)
    return (
      <View style={[styles.container, { display: hidden ? 'none' : 'flex' }]}>
        <View style={styles.content}>
          <Animatable.Image animation={animation} style={styles.background} source={require('../assets/background.png')}/>
          <Animatable.Image animation={animation} style={styles.background} source={require('../assets/robot-2.png')}/>
          <Animatable.Image animation={animation} style={[styles.arm, styles.armLeft]} source={require('../assets/left-arm.png')}/>
          <Animatable.Image animation={animation} style={[styles.arm, styles.armRight]} source={require('../assets/right-arm.png')}/>

          <Eye style={styles.eyeLeft} blink={true}/>
          <Eye style={styles.eyeRight} blink={true}/>

          <View style={styles.heartContainer}>
            { hearts.map(id => <Heart key={id} direction='left'/> )}
          </View>
        </View>
      </View>
    )
  }
}

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width, height,
  },
  content: {
    width: 250,
    height: 200,
  },
  background: {
    position: 'absolute',
    height: 200,
    width: 250,
    resizeMode: 'contain',
  },
  robot: {
    position: 'absolute',
    height: 200,
    width: 250,
    resizeMode: 'contain',
  },
  arm: {
    width: 30,
    resizeMode: 'contain',
  },
  armLeft: {
    position: 'absolute',
    marginLeft: 67,
    marginTop: 30,
  },
  armRight: {
    position: 'absolute',
    marginLeft: 152,
    marginTop: -5,
    transform: [{ rotateX: '180deg'}],
  },
  eyeLeft: {
    top: 52,
    left: 104,
  },
  eyeRight: {
    top: 52,
    left: 139,
  },
  heartContainer: {
    marginLeft: 23,
    width: 200,
    height: 200,
  },
})
