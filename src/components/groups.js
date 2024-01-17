import React from 'react'
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  FlatList,
  Dimensions,
  ImageBackground
} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

const windowWidth = Dimensions.get('window').width
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

const Item = ({ title, members, date, backgroundImage }) => (
  <ImageBackground
    source={backgroundImage}
    imageStyle={{ borderRadius: 8 }}
    style={styles.itemBackground}
  >
    <View style={styles.item}>
      <View style={styles.titleBackground}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.groupDescription}>
        <Text style={styles.itemDescription}>{date}</Text>
        <Text style={styles.itemDescription}>{members}</Text>
      </View>
    </View>
  </ImageBackground>
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
            <Item
              title={item.title}
              members={item.members}
              date={item.date}
              backgroundImage={item.backgroundImage}
            />
          )}
        />
      </View>
      <View></View>
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
    width: windowWidth * 0.9,
    height: 130,
    justifyContent: 'space-between',
    borderWidth: 0.1,
    overflow: 'hidden'
  },
  groupContainer: {
    height: windowHeight * 0.75,
    marginTop: 20,
    alignItems: 'center'
  },
  groupDescription: {
    justifyContent: 'space-between',
    width: '100%',
    padding: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    backgroundColor: 'rgba(0,0,0,0.4)',
    gap: 40,
    flexDirection: 'row'
  },
  title: {
    fontSize: 20,
    color: 'white'
  },
  titleBackground: {
    margin: 5,
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 5,
    borderRadius: 8,
    blurRadius: 1
  },
  itemDescription: {
    fontSize: 14,
    color: 'white'
  },
  itemBackground: {
    resizeMode: 'cover',
    justifyContent: 'center',
    marginBottom: 20
  }
})

export default Groups
