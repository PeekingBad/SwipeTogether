import react from 'react'
import { Text, StyleSheet, View, StatusBar } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

const TopNavigation = (props) => {
  const { pageName } = props
  const { topBar, screenTitle, accountIcon } = styles
  return (
    <View style={topBar}>
      <Text style={screenTitle}>Favorites</Text>
      <MaterialIcons
        style={accountIcon}
        name="account-circle"
        size={40}
        color="black"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  topBar: {
    marginTop: StatusBar.currentHeight || 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  screenTitle: {
    fontSize: 28
  },
  accountIcon: {
    position: 'absolute',
    right: 15
  }
})

export default TopNavigation
