import React from 'react'
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  FlatList,
  Dimensions
} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const DATA = [
  {
    title: 'Games',
    members: 'Daniell, Pim, Jordan',
    date: '20-12-2023'
  },
  {
    title: 'Vacation',
    members: 'Daniell, Pim, Jordan, Max',
    date: '08-06-2024'
  },
  {
    title: 'Weekend Trip',
    members: 'Daniell, Marleen',
    date: '20-06-2024'
  },
  {
    title: 'Family Holiday',
    members: 'Daniell, Marleen, Tim, Julia',
    date: '20-12-2023'
  },
  {
    title: 'Games 2',
    members: 'Daniell, Pim',
    date: '20-12-2023'
  }
]

const Item = ({ title, members, date }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <View style={styles.groupDescription}>
      <Text style={styles.itemDescription}>{date}</Text>
      <Text style={styles.itemDescription}>{members}</Text>
    </View>
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
          showsVerticalScrollIndicator={false}
          data={DATA}
          renderItem={({ item }) => (
            <Item title={item.title} members={item.members} date={item.date} />
          )}
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
  item: {
    alignItems: 'left',
    padding: 10,
    width: windowWidth * 0.9,
    height: 130,
    marginBottom: 20,
    borderRadius: 13,
    justifyContent: 'space-between',
    borderWidth: 1
  },
  groupContainer: {
    height: windowHeight * 0.75,
    marginTop: 20,
    alignItems: 'center'
  },
  groupDescription: {
    justifyContent: 'space-between',
    gap: 40,
    flexDirection: 'row',
    backgroundColor: 'white'
  },
  title: {
    fontSize: 20
  },
  itemDescription: {
    fontSize: 14
  }
})

export default Groups
