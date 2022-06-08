import { StyleSheet } from 'react-native'
import themeStyle from '../../styles/theme.style'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    flex: 0.7,
    backgroundColor: '#fff',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  logo: {
    flex: 5,
  },
  nav: {
    flex: 1,
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    flex: 5,
    backgroundColor: themeStyle.BACKGROUND_COLOR,
  },
})

export default styles
