import React from 'react'
import { Text, View, SafeAreaView, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const Splash = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <MaterialCommunityIcons name="cards-outline" size={90} color="black" />
        <Text style={styles.title}>Swipe Together</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#1FE879'
  },
  container: {
    backgroundColor: '#1FE879',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 27,
    color: 'black'
  }
})

export default Splash
