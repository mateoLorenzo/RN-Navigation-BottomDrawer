import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ScreenOne from '../screens/ScreenOne'
import ScreenTwo from '../screens/ScreenTwo'
import ScreenThree from '../screens/ScreenThree'
import { Image, StyleSheet, Text, View } from 'react-native'
import ScreenFour from '../screens/ScreenFour'

const Tab = createBottomTabNavigator()

const BottomTab = () => {
   return(
      <Tab.Navigator tabBarOptions={{
         showLabel: false,
         style: {
            position: 'absolute',
            bottom: 20,
            left: 15,
            right: 15,
            elevation: 10,
            backgroundColor: "#ffffff",
            borderRadius: 15, 
            height: 90,
         }
      }}>
         <Tab.Screen name="screen one" component={ScreenOne} options={{
            tabBarIcon: ({focused}) => (
               <View style={{alignItems: 'center', top: 5}}>
                  <Image 
                     source={{uri: 'https://i.imgur.com/4om33nO.png'}}
                     style={{
                        width: 20,
                        height: 20,
                        tintColor: focused ? 'red' : 'grey'
                     }}
                   />
                  <Text style={{ color: focused ? 'red' : 'grey' }}> HOME </Text>
               </View>
            )
         }} />

         
         <Tab.Screen name="screen two" component={ScreenTwo} options={{
            tabBarIcon: ({focused}) => (
               <View style={{ alignItems: 'center', top: 5 }}>
                  <Image 
                     source={{ uri: 'https://i.imgur.com/40nGdhJ.png' }}
                     style={{
                        width: 25,
                        height: 25,
                        tintColor: focused ? 'red' : 'grey'
                     }}
                  />
                  <Text style={{ color: focused ? 'red' : 'grey' }}> SEARCH </Text>
               </View>
            )
         }} />
         
         
         <Tab.Screen name="screen three" component={ScreenThree} options={{
            tabBarIcon: ({focused}) => (
               <View style={{ top: 5, alignItems: 'center' }}>
                  <Image
                     source={{uri: 'https://i.imgur.com/DHrI3bJ.png'}}
                     style={{ 
                        width: 25,
                        height: 25,
                        tintColor: focused ? 'red' : 'grey'
                     }}
                     />
                  <Text style={{ color: focused ? 'red' : 'grey' }}> CHAT </Text>
               </View>
            )
         }} />
         
         
         <Tab.Screen name="screen four" component={ScreenFour} options={{
            tabBarIcon: ({focused}) => (
               <View style={{ alignItems: 'center', top: 5 }}>
                  <Image 
                     source={{ uri: 'https://i.imgur.com/pSZ85sV.png'}}
                     style={{
                        width: 25,
                        height: 25,
                        tintColor: focused ? 'red' : 'grey'
                     }}/>
                  <Text style={{ color: focused ? 'red' : 'grey' }}> SETTINGS</Text>
               </View>
            )
         }} />
      </Tab.Navigator>
      )
}


export default BottomTab