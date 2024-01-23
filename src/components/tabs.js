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
        },
        tabBarLabelStyle: {
          fontSize: 12
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
              size={32}
              color={focused ? '#1FE879' : 'grey'}
              style={{ marginTop: 5 }}
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
              size={32}
              color={focused ? '#1FE879' : 'grey'}
              style={{ marginTop: 5 }}
            />
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default Tabs
