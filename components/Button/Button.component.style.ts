import { StyleSheet } from 'react-native'

// Theme style
import themeStyle from '../../styles/theme.style'

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  text: {
    fontSize: themeStyle.FONT_SIZE_MEDIUM,
    fontWeight: '600',
  },
})

export default styles
