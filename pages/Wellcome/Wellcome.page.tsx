import * as React from 'react'
import { Button, Image, Text, View } from 'react-native'

// Styles
import styles from './Wellcome.page.style'

// Components
import Btn from '../../components/Button/Button.component'

const Wellcome = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.logo}></View>
        <Text style={styles.text}>Food for</Text>
        <Text style={styles.text}>Everyone</Text>
      </View>
      <View
        style={{
          width: '100%',
          position: 'relative',
          flex: 4,
          justifyContent: 'center',
        }}
      >
        <Image
          style={{ position: 'absolute', left: 0, zIndex: 2, width: 275 }}
          source={require('./../../assets/ToyFaces_Tansparent_BG_49.png')}
        />
        <Image
          style={{ position: 'absolute', right: 0, zIndex: 1 }}
          source={require('./../../assets/ToyFaces_Tansparent_BG_29.png')}
        />
      </View>
      <View style={{ flex: 1, zIndex: 3 }}>
        <Btn
          onPress={() => navigation.navigate('Auth')}
          style={styles.button}
          color="#FA4A0C"
          title="Get started"
          width={315}
          height={70}
          bgc="#fff"
        />
      </View>
    </View>
  )
}

export default Wellcome
