import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FriendList from './components/FriendList';
import FriendDetails from './components/FriendDetails';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Daftar Kontak Teman Sekelas" component={FriendList} />
        <Stack.Screen name="Details" component={FriendDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}