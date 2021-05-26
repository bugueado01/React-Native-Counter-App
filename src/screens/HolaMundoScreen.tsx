import React from 'react'
import { View, Text } from 'react-native';


export const HolaMundoScreen = () => {
     return (
          <View style={{
               flex: 1,
               backgroundColor: '#e9e9e9',
               justifyContent: 'center'
          }}>
               <Text style={{
                    fontSize: 45,
                    textAlign: 'center'
               }}>
                    Hola Mundo desde Screens
               </Text>
          </View>
     )
}
