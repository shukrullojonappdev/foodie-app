import * as React from 'react'
import { View, Text, Pressable } from 'react-native'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import MyTabBar from '../../components/TabBar/TabBar.component'
import Login from '../../components/Login/Login.component'

import styles from './Auth.page.style'

const Tab = createMaterialTopTabNavigator()

const FormComponent = () => {
  return (
    <View style={styles.form}>
      <Text>form</Text>
    </View>
  )
}

const Auth = () => {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        initialRouteName="Login"
        tabBar={(props) => <MyTabBar {...props} />}
      >
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="Fomr" component={FormComponent} />
      </Tab.Navigator>
    </View>
  )
}

export default Auth
