import React from 'react'
import Splash from '../screens/splashscreen'
import Groups from '../screens/groups'
import Favorites from '../screens/favorites'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#1FE879',
        tabBarInactiveTintColor: 'grey',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 25
        }
      }}
    >
      <Tab.Screen
        name={'Groups'}
        component={Groups}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name={'cards'}
              size={25}
              color={focused ? '#1FE879' : 'grey'}
            />
          )
        }}
      />
      <Tab.Screen
        name={'Favorites'}
        component={Favorites}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name={'cards-heart'}
              size={25}
              color={focused ? '#1FE879' : 'grey'}
            />
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default Tabs
