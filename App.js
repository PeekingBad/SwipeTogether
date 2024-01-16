import React from 'react'
import { View, StyleSheet } from 'react-native'
import Splash from './src/components/splashscreen'

const App = () => {
  return (
    <View style={styles.container}>
      <Splash />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
export default App
