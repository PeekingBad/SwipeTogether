import React from 'react'
import { SafeAreaView, Text, StyleSheet, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

const Groups = () => {
  return (
    <SafeAreaView>
      <View style={styles.topBar}>
        <Text style={styles.screenTitle}>Groups</Text>
        <MaterialIcons
          style={styles.accountIcon}
          name="account-circle"
          size={40}
          color="black"
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  topBar: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  screenTitle: {
    fontSize: 28
  },
  accountIcon: {
    position: 'absolute',
    right: 16
  }
})

export default Groups
