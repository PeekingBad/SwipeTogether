import React from 'react'
import { View, StyleSheet } from 'react-native'
import Splash from './src/components/splashscreen'
import Groups from './src/components/groups'

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
