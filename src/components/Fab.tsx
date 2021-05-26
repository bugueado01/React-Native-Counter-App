import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet, TouchableNativeFeedback, Platform } from 'react-native';

interface Props{
     title: string;
     onPress: () => void;
     position?: 'br' | 'bl';
}

export const Fab = ( { title, onPress, position = 'br' }: Props ) => {

     const ios = () => {
          return (
               <TouchableOpacity 
                    onPress={ onPress }
                    activeOpacity={ 0.5 }     
                    style={ [
                         styles.fabLocation, 
                         (position === 'bl') ? styles.left : styles.right
                    ]}>
                    <View style={ styles.fab }>
                         <Text style={ styles.fabText }>
                              { title }
                         </Text>     
                    </View>
               </TouchableOpacity>
          )
     }

     const android = () => {
          return (
               <View style={ [styles.fabLocation, 
                    (position === 'bl') ? styles.left : styles.right]
                    }>
                    <TouchableNativeFeedback background={ TouchableNativeFeedback.Ripple('#28425B', false, 30) }  onPress={ onPress }>
                         <View style={ styles.fab }>
                              <Text style={ styles.fabText }>
                                   { title }
                              </Text>     
                         </View>
                    </TouchableNativeFeedback>
               </View>
          )
     }

     return (Platform.OS === 'ios') ? ios() : android();


     
}

const styles = StyleSheet.create({
     fabLocation:{
          position: 'absolute',
          bottom: 25,
          borderRadius: 100
     },
     right:{
          right: 25
     },
     left:{
          left: 25
     },
     fab:{
          backgroundColor: '#5856D6',
          height: 60,
          width: 60,
          borderRadius: 100,
          justifyContent: 'center',
          shadowColor: '#000',
          shadowOffset: {
               width: 0,
               height: 4,
          },
          shadowOpacity: 0.30,
          shadowRadius: 4.65,
          elevation: 8,
     },
     fabText:{
          color: 'white',
          fontSize: 25,
          fontWeight: 'bold',
          alignSelf: 'center'
     }
     
})
