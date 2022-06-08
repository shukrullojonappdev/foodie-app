import { StyleSheet } from 'react-native'
import themeStyle from '../../styles/theme.style'

const styles = StyleSheet.create({
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
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 134,
    borderBottomWidth: 2,
  },
})

export default styles
