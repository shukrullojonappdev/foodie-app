import * as React from 'react'
import { View, Text, Pressable } from 'react-native'

import TabBarInterface from './TabBar.component.prop'

import styles from './TabBar.component.style'

const MyTabBar = (props: TabBarInterface) => {
  return (
    <View style={styles.box}>
      <View style={styles.logo}></View>
      <View style={styles.nav}>
        {props.state.routes.map((route: any, index: number) => {
          const { options } = props.descriptors[route.key]
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name

          const isFocused = props.state.index === index

          const onPress = () => {
            const event = props.navigation.emit({
              type: 'tabPress',
              target: route.key,
            })

            if (!isFocused && !event.defaultPrevented) {
              props.navigation.navigate(route.name)
            }
          }

          return (
            <View key={index}>
              <Pressable
                onPress={onPress}
                style={[
                  { borderBottomColor: isFocused ? '#FA4A0C' : '#00000000' },
                  styles.tab,
                ]}
              >
                <Text style={{ fontWeight: '600' }}>{label}</Text>
              </Pressable>
            </View>
          )
        })}
      </View>
    </View>
  )
}

export default MyTabBar
