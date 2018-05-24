import React, { PureComponent } from 'react'
import { View, StyleSheet, Image } from 'react-native'

export default class SplashScreen extends PureComponent {
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image style={styles.icon} source={require('../assets/icon.png')}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
