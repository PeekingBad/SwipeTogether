import React from 'react'
import { SafeAreaView, Text, StyleSheet, View, FlatList } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

const DATA = [
  {
    title: 'Games'
  },
  {
    title: 'Vacation'
  },
  {
    title: 'Weekend Trip'
  }
]

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
)

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
      <View style={styles.groupContainer}>
        <FlatList
          data={DATA}
          renderItem={({ item }) => <Item title={item.title} />}
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
    right: 15
  },
  otherDiv: {
    marginTop: 20,
    height: 560,
    backgroundColor: 'red'
  },
  item: {
    backgroundColor: 'red',
    alignItems: 'left',
    padding: 20,
    height: 130,
    width: 370,
    marginBottom: 20,
    borderRadius: 13
  },
  groupContainer: {
    marginTop: 20,
    alignItems: 'center'
  }
})

export default Groups
