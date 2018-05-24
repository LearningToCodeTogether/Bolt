import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import * as Animatable from 'react-native-animatable'

export default class SpeechBubble extends PureComponent {
  state = {
    hidden: true,
    props: {}
  }

  componentDidMount(){
    const { timeline } = this.props
    timeline.on('speech.show', this.show)
    timeline.on('speech.hide', this.hide)
  }

  show = (props = {}) => {
    this.setState({
      hidden: false,
      animation: 'fadeInUp',
      props,
    })
  }

  hide = (props = {}) => {
    this.setState({
      hidden: false,
      animation: 'fadeOutUp',
      // props,
    })
  }

  render(){
    const { hidden, animation } = this.state
    const { text } = this.state.props

    return (
      <View style={styles.container}>
        <Animatable.View style={[styles.bubble, { display: hidden ? 'none' : 'flex' }]} animation={animation}>
          <Text style={styles.text}>{text}</Text>
          <View style={styles.pointer}/>
        </Animatable.View>
      </View>
    )
  }
}

const { width } = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 170,
    alignItems: 'center',
    // backgroundColor: 'red',
    width,
  },
  bubble: {
    backgroundColor: '#006DFF',
    borderRadius: 50,
    height: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontWeight: "bold",
  },
  pointer: {
    position: 'absolute',
    width: 10,
    height: 10,
    backgroundColor: 'red',
    top: 34,
    transform: [ {rotate: '45deg' }],
    backgroundColor: '#006DFF'
  }
})
