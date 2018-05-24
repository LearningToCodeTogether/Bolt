import React, { PureComponent } from 'react'
import { View, Text, Animated, TouchableHighlight, StyleSheet } from 'react-native'
import * as Animatable from 'react-native-animatable'


export default class Button extends PureComponent {

  state = {
    animation: undefined,
    hidden: true,
    props: {},
  }

  componentDidMount(){
    const { timeline } = this.props
    timeline.on('button.show', this.show)
    timeline.on('button.hide', this.hide)
  }

  show = (props = {}) => {
    this.setState({
      hidden: false,
      animation: 'slideInUp',
      props,
    })
  }

  hide = () => {
    this.setState({
      hidden: false,
      animation: 'slideOutDown',
    })
  }

  render(){
    const { animation, hidden, props } = this.state
    console.log('button', {props})
    return (
      <View style={styles.container}>
        <Animatable.View
          animation={animation}
          style={{ display: hidden ? 'none': 'flex' }}>
          <TouchableHighlight onPress={props.onPress} underlayColor='transparent'>
            <View style={styles.button}>
              <Text style={styles.text}>{props.text}</Text>
            </View>
          </TouchableHighlight>

          { props.reset && (
            <TouchableHighlight onPress={props.onResetPress} underlayColor='transparent'>
              <Text style={styles.textReset}>Restart</Text>
            </TouchableHighlight>
          )}


        </Animatable.View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: 380,
    height: 100,
    alignItems: 'center',
  },
  button: {
    height: 50,
    width: 200,
    backgroundColor: '#006DFF',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },
  textReset: {
    color: '#006DFF',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  }
})
