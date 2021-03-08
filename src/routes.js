import React from 'react'
import { Image, View } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import logo from './assets/instagram.png'

import Feed from './pages/Feed'

const Routes = createAppContainer(
  createStackNavigator({
    Feed
  }, {
    defaultNavigationOptions: {
      headerTitle: () => {
        return (
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
            <Image source={logo} />
          </View>
        )
      },
      headerStyle: {
        backgroundColor: '#f5f5f5'
      }
    },
  })
)

export default Routes