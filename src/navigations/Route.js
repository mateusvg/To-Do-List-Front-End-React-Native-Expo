import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TabNavigation from '../pages/TabNavigation'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="TabNavigation" component={TabNavigation} options={{ header: () => null, }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
