import react from 'react'
import {
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
  FlatList,
  Dimensions
} from 'react-native'
import TopNav from '../components/topNavigation'

const windowHeight = Dimensions.get('window').height

const DATA = [
  {
    title: 'Games'
  },
  {
    title: 'Countries'
  },
  {
    title: 'Activities'
  },
  {
    title: 'Restaurants'
  },
  {
    title: 'Festivals'
  }
]

const CategoryItems = ({ title }) => (
  <View style={styles.category}>
    <Text style={styles.categoryText}>{title}</Text>
  </View>
)

const Favorites = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TopNav pageName="Favorites"></TopNav>
      <View style={styles.selectCategoryView}>
        <Text style={styles.selectCategoryText}>Select a category</Text>
      </View>
      <View style={styles.categoryContainer}>
        <FlatList
          data={DATA}
          renderItem={({ item }) => <CategoryItems title={item.title} />}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 20
  },
  selectCategoryView: {
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  selectCategoryText: {
    fontSize: 20,
    fontStyle: 'italic'
  },
  category: {
    backgroundColor: '#1FE879',
    marginTop: 20,
    height: 50,
    marginHorizontal: 20,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center'
  },
  categoryText: {
    fontSize: 20
  },
  categoryContainer: {
    height: windowHeight * 0.65,
    marginTop: 20,
    overflow: 'hidden'
  }
})

export default Favorites
