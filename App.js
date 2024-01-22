import React from 'react'
import { View, StyleSheet } from 'react-native'
import Splash from './src/screens/splashscreen'
import Groups from './src/screens/groups'
import Favorites from './src/screens/favorites'

const App = () => {
  return (
    <View style={styles.container}>
      <Favorites />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
export default App
