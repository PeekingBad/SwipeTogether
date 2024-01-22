import React from 'react'
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  FlatList,
  Dimensions,
  StatusBar
} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import GroupCard from '../components/groupCard'

const windowHeight = Dimensions.get('window').height

const DATA = [
  {
    title: 'Games',
    members: 'Daniell, Pim, Jordan',
    date: '20-12-2023',
    backgroundImage: require('../../Images/Games.jpg')
  },
  {
    title: 'Vacation',
    members: 'Daniell, Pim, Jordan, Max',
    date: '08-06-2024',
    backgroundImage: require('../../Images/Vacation.jpg')
  },
  {
    title: 'Weekend Trip',
    members: 'Daniell, Marleen',
    date: '20-06-2024',
    backgroundImage: require('../../Images/WeekendTrip.jpg')
  },
  {
    title: 'Family Holiday',
    members: 'Daniell, Marleen, Tim, Julia',
    date: '20-12-2023',
    backgroundImage: require('../../Images/FamilyHoliday.jpg')
  },
  {
    title: 'Games 2',
    members: 'Daniell, Pim',
    date: '20-12-2023',
    backgroundImage: require('../../Images/Games2.jpg')
  }
]

const CardInfo = () => {
  const renderItem = ({ item }) => (
    <GroupCard
      title={item.title}
      members={item.members}
      date={item.date}
      backgroundImage={item.backgroundImage}
    />
  )
  const { topBar, screenTitle, accountIcon, groupContainer } = styles
  return (
    <SafeAreaView>
      <View style={topBar}>
        <Text style={screenTitle}>Groups</Text>
        <MaterialIcons
          style={accountIcon}
          name="account-circle"
          size={40}
          color="black"
        />
      </View>
      <View style={groupContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={DATA}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
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
  },
  groupContainer: {
    height: windowHeight * 0.75,
    marginTop: 20,
    alignItems: 'center'
  }
})

export default CardInfo
