import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import BottomTab from './navigation/BottomTab';

export default function App() {
  return (
      <NavigationContainer>
        <StatusBar/>
        <BottomTab/>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
