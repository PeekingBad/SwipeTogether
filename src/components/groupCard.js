import react from 'react'
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  ImageBackground
} from 'react-native'

const windowWidth = Dimensions.get('window').width

const GroupCard = (props) => {
  const { title, members, date, backgroundImage } = props
  return (
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
}

const styles = StyleSheet.create({
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
  },
  item: {
    alignItems: 'left',
    width: windowWidth * 0.9,
    height: 150,
    justifyContent: 'space-between',
    borderWidth: 0.1,
    overflow: 'hidden'
  }
})

export default GroupCard
