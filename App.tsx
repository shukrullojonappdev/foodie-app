import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Pages
import Wellcome from './pages/Wellcome/Wellcome.page'
import Auth from './pages/Auth/Auth.page'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Wellcome">
          <Stack.Screen
            name="Wellcome"
            component={Wellcome}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Auth"
            component={Auth}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}
