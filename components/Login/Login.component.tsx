import * as React from 'react'
import { TextInput, View } from 'react-native'

import Btn from '../Button/Button.component'

import styles from './Login.component.style'

const Login = () => {
  return (
    <View style={styles.container}>
      <TextInput />
      <Btn
        onPress={() => console.log('hello')}
        style={styles.button}
        title="Login"
        width={315}
        height={70}
        bgc="#FA4A0C"
        color="#fff"
      />
    </View>
  )
}

export default Login
