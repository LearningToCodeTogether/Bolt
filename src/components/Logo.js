import React, { PureComponent } from 'react'
import { View, Image, StyleSheet } from 'react-native'
import * as Animatable from 'react-native-animatable'

import Timeline from '../Timeline'

export default class Logo extends PureComponent {

  state = {
    animation: 'bounceIn',
  }

  componentDidMount(){
    const { timeline } = this.props
    
    timeline.on('logo.show', this.show)
    timeline.on('logo.hide', this.hide)
  }

  show = () => {
    this.setState({ animation: 'bounceIn' })
  }

  hide = () => {
    this.setState({ animation: 'bounceOut' })
  }

  render(){
    const { animation } = this.state

    return (
      <View style={styles.container}>
        <Animatable.View style={styles.logo} animation={animation}>
          <Image style={styles.icon} source={require('../assets/icon.png')}/>
        </Animatable.View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    backgroundColor: '#006DFF', // blue
    borderRadius: 75,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  }
})
