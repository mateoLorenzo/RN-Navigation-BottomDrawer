import React from 'react' 
import { StyleSheet, Text, View } from 'react-native'

const ScreenTwo = () => {
   return( 
      <View style={styles.mainContainer}>
         <Text style={styles.mainText}>SEARCH SCREEN</Text>
      </View>
   )
}

const styles = StyleSheet.create({
   mainContainer: {
      backgroundColor: '#90cdbd',
      flex: 1, 
      justifyContent: 'center',
      alignItems: 'center'
   },
   mainText: {
      color: 'black',
      fontSize: 20,
   }
})

export default ScreenTwo