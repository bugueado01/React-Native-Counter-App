import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

export const FlexScreen = () => {
     return (
          <View style={styles.container}>
               <Text style={styles.caja1}>Caja 1</Text>
               <Text style={styles.caja2}>Caja 2</Text>
               <Text style={styles.caja3}>Caja 3</Text>
          </View>
     )
}

const styles = StyleSheet.create({
     container:{
          flex: 1,
          // height: 300,
          backgroundColor: '#28C4D9',
          // flexDirection: 'row',
          // justifyContent: 'center',
          // alignItems: 'flex-start',
          // flexWrap: 'wrap'
     },
     caja1:{
          // width: 100,
          // height: 100,
          // flex: 1,
          // width: '100%',
          borderWidth: 2,
          borderColor: '#fff',
          fontSize: 30, 
          // alignSelf: 'center'
     },
     caja2:{
          // width: 100,
          // height: 100,
          // flex: 3,
          borderWidth: 2,
          borderColor: '#fff',
          fontSize: 30, 
          // alignSelf: 'flex-start'
     },
     caja3:{
          // width: 100,
          // height: 100,
          // flex: 3,
          borderWidth: 2,
          borderColor: '#fff',
          fontSize: 30, 
          // alignSelf: 'flex-end'
     }
});