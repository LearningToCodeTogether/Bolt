import React, { PureComponent } from 'react'
import { View, StyleSheet, Animated } from 'react-native'

export default class Eye extends PureComponent {
  state = {
    eyeHeight: new Animated.Value(8),
  }

  animate = (toValue) => {
    Animated.timing(
      this.state.eyeHeight,
      {
        toValue: toValue,
        duration: 300,
      }
    ).start()

  }

  animationSequence(){
    this.animate(2)

    setTimeout(() => this.animate(8), 400)
    setTimeout(() => this.animationSequence(), 2000)
  }

  componentDidMount(){
    const { blink } = this.props

    if(blink){
      this.animationSequence()
    }
  }


  render(){
    const { style } = this.props
    const { eyeHeight } = this.state

    return (
      <View style={[styles.container, style]}>
        <Animated.View style={[styles.eye, { height: eyeHeight }]}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: 8,
    height: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  eye: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'white',
  }
})
