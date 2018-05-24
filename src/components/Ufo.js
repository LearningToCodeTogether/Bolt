import React, { PureComponent } from 'react'
import { View, Image, StyleSheet, Animated } from 'react-native'
import * as Animatable from 'react-native-animatable'

export default class Ufo extends PureComponent {
  state = {
    hidden: true,
    offsetX: new Animated.Value(-300),
    opacity: new Animated.Value(0),
  }

  componentDidMount(){
    const { timeline } = this.props
    timeline.on('ufo.show', this.show)
  }

  show = () => {
    this.setState({
      hidden: false,
    })

    this.slideUfo(0)
    setTimeout(() => this.showBeam(1), 1500)
    setTimeout(() => this.showBeam(0), 3000)
    setTimeout(() => this.slideUfo(300), 4500)
  }

  slideUfo = (value) => {
    Animated.timing(
      this.state.offsetX,
      {
        toValue: value,
        duration: 1500,
      }
    ).start()
  }

  showBeam = (value) => {
    Animated.timing(
      this.state.opacity,
      {
        toValue: value,
        duration: 1500,
      },
    ).start()
  }

  render(){
    const { hidden, animation, offsetX, opacity } = this.state

    return (
      <View style={[styles.container, { display: hidden ? 'none' : 'flex' }]}>
        <Animated.View style={styles.ufo}>
          <Animated.Image style={[styles.spaceship, {transform: [{ translateX: offsetX }]}]} source={require('../assets/ufo.png')}/>
          <Animated.Image style={[styles.beam, {opacity}]} source={require('../assets/beam.png')}/>
        </Animated.View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 130,
    width: 380,
    height: 150,
  },
  ufo: {
    marginLeft: 170,
  },
  spaceship: {
    width: 50,
    resizeMode: 'contain',
  },
  beam: {
    marginTop: -30,
    marginLeft: -5,
    height: 80,
    resizeMode: 'contain',
  }
})
