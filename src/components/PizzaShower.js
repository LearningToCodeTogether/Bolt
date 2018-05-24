import React, { PureComponent } from 'react'
import { View, Image, StyleSheet, Animated } from 'react-native'

export default class PizzaShower extends PureComponent {

  state = {
    hidden: true,
    props: {},
    slices: [],
    count: 0,
  }

  componentDidMount(){
    const { timeline } = this.props
    timeline.on('pizza.show', this.show)
    timeline.on('pizza.drop', this.dropASlice)
  }

  show = (props = {}) => {
    this.setState({
      hidden: false,
      props,
    })
  }

  dropASlice = () => {
    const slices = [...this.state.slices]
    slices.push(this.state.count)

    this.setState({
      slices,
      count: this.state.count + 1,
    })
  }


  render(){
    const { hidden, slices } = this.state

    return (
      <View style={[styles.container, { display: hidden ? 'none' : 'flex' }]}>
        { slices.map(id => <PizzaSlice key={id}/> )}
      </View>
    )
  }
}

class PizzaSlice extends PureComponent {
  state = {
    offsetY: new Animated.Value(0),
  }
  componentDidMount(){
    this.animate()
  }
  animate(){
    Animated.timing(
      this.state.offsetY,
      {
        toValue: 400,
        duration: 800,
      }
    ).start()
  }
  render(){
    const { offsetY } = this.state

    return (
      <Animated.Image style={[styles.pizzaSlice, { transform: [{ translateY: offsetY }]}]} source={require('../assets/pizza-slice.png')}/>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 999,
    height: 350,
    overflow: 'hidden',
    width: 200,
    left: 90,
    alignItems: 'center',
  },
  pizzaSlice: {
    position: 'absolute',
    marginTop: -70,
    width: 30,
    resizeMode: 'contain',
  }
})
