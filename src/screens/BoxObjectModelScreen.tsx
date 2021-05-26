import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

export const BoxObjectModelScreen = () => {
     return (
          <View style={styles.container}>
               <Text style={styles.title}>Box Object Model</Text>
          </View>
     )
}

const styles = StyleSheet.create({
     container:{
          flex: 1,
          backgroundColor: 'green'
     },
     title:{
          // padding: 50,
          paddingHorizontal: 100,
          paddingVertical: 20,
          // marginRight: 10,
          // marginLeft: 10,
          marginHorizontal: 20,
          fontSize: 20,
          // width: 250,
          borderWidth: 10
     }
})
