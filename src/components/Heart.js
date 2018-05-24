import React, { PureComponent } from 'react'
import { View, Image, Animated, StyleSheet } from 'react-native'

export default class Heart extends PureComponent {
  state = {
    opacity: new Animated.Value(1),
    offset: new Animated.Value(0),
    scale: new Animated.Value(1),
  }

  componentDidMount(){
    this.animate()
  }

  animate(){
    Animated.timing(
      this.state.opacity,
      {
        toValue: 0,
      }
    ).start()

    Animated.timing(
      this.state.offset,
      {
        toValue: -100,
      }
    ).start()
    Animated.timing(
      this.state.scale,
      {
        toValue: .5,
      }
    ).start()
  }


  render(){
    const { offset, opacity, scale } = this.state

    return (
      <View style={styles.container}>
        <Animated.Image
          style={[styles.heart, {
            opacity,
            transform: [ { translateY: offset }, { scale }]
          }]}
          source={require('../assets/heart.png')}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {

  },
  heart: {
    position: 'absolute',
    left: 20,
    width: 30,
    marginLeft: 70,
    marginTop: -20,
    resizeMode: 'contain',
    transform: [ { rotate: '-40deg' }],
  }
})
