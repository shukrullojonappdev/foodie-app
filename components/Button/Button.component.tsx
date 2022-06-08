import * as React from 'react'
import { Pressable, Text } from 'react-native'

// Props
import ButtonProps from './Button.component.prop'

// Styles
import styles from './Button.component.style'

const Btn = (props: ButtonProps) => {
  return (
    <Pressable
      onPress={props.onPress}
      style={[
        styles.button,
        {
          width: props.width,
          height: props.height,
          backgroundColor: props.bgc,
        },
        props.style,
      ]}
    >
      <Text style={[styles.text, { color: props.color }]}>{props.title}</Text>
    </Pressable>
  )
}

export default Btn
