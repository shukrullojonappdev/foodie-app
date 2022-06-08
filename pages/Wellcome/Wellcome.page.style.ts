import { StyleSheet } from 'react-native'

// Theme style
import themeStyle from '../../styles/theme.style'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FF4B3A',
  },
  logo: {
    height: 65,
    width: 65,
    borderRadius: 50,
    backgroundColor: '#fff',
  },
  button: {
    marginBottom: 30,
  },
  box: {
    flex: 3,
    marginTop: 80,
    width: 315,
  },
  text: {
    fontSize: 50,
    color: '#fff',
    fontWeight: '700',
    textAlign: 'left',
  },
})

export default styles
