import React from 'react'
import { View, StyleSheet } from 'react-native'
import Splash from './src/screens/splashscreen'
import Groups from './src/screens/groups'

const App = () => {
  return (
    <View style={styles.container}>
      <Groups />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
export default App
