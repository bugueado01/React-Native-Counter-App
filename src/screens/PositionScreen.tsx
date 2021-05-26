import React from 'react'
import { View, StyleSheet } from 'react-native';

export const PositionScreen = () => {
     return (
          <View style={styles.container}>
               <View style={styles.cajaMorada} />
               <View style={styles.cajaNaranja} />
               
          </View>
     )
}

const styles = StyleSheet.create({
    container: {
         flex: 1,
         backgroundColor: '#28C4D9',
         justifyContent: 'center',
         alignItems: 'center',
     //     width: 300,
     //     height: 300
    },
    cajaMorada:{
          width: 100,
          height: 100,
          backgroundColor: '#5856D6',
          borderWidth: 10,
          borderColor: '#fff',
          // top: 0,
          position: 'absolute',
          bottom: 10
    },
    cajaNaranja:{
          width: 100,
          height: 100,
          backgroundColor: '#F0A23B',
          borderWidth: 10,
          borderColor: '#fff',
          // top: -50
}
});
