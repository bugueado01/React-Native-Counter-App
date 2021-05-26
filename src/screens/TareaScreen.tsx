import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

export const TareaScreen = () => {
     return (
          <View style={styles.container}>
               < View style={styles.cajaMorada}/>
               < View style={styles.cajaNaranja}/>
               < View style={styles.cajaAzul}/>
          </View>
     )
}

const styles = StyleSheet.create({
     container:{
          backgroundColor: '#28425B',
          flex: 1,
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'center'
     },
     cajaMorada:{
          width: 100,
          height: 100,
          borderWidth: 10,
          borderColor: 'white',
          backgroundColor: '#5856D6',
          // top: 100
          // flex: 1
     },
     cajaNaranja:{
          width: 100,
          height: 100,
          borderWidth: 10,
          borderColor: 'white',
          backgroundColor: '#F0A23B',
          top: 50
          // alignSelf:'stretch'
          // left: 100
          // flex: 1
     },
     cajaAzul:{
          width: 100,
          height: 100,
          borderWidth: 10,
          borderColor: 'white',
          backgroundColor: '#28C4D9',
          // flex: 2
     },
});

// Tarea:
// 1. cajaNaranja:{
//      flex: 1,
//      width: 100,
//      height: 100,
//      borderWidth: 10,
//      borderColor: 'white',
//      backgroundColor: '#F0A23B'
// },

// 2. const styles = StyleSheet.create({
//      container:{
//           backgroundColor: '#28425B',
//           flex: 1,
//           justifyContent: 'center'
//      },
//      cajaMorada:{
//           width: 100,
//           height: 100,
//           borderWidth: 10,
//           borderColor: 'white',
//           backgroundColor: '#5856D6'
//      },
//      cajaNaranja:{
//           // flex: 1,
//           width: 100,
//           height: 100,
//           borderWidth: 10,
//           borderColor: 'white',
//           backgroundColor: '#F0A23B'
//      },
//      cajaAzul:{
//           width: '100%',
//           height: 100,
//           borderWidth: 10,
//           borderColor: 'white',
//           backgroundColor: '#28C4D9'
//      },
// });

// 3. const styles = StyleSheet.create({
//      container:{
//           backgroundColor: '#28425B',
//           flex: 1,
//           justifyContent: 'center'
//      },
//      cajaMorada:{
//           width: 100,
//           height: 100,
//           borderWidth: 10,
//           borderColor: 'white',
//           backgroundColor: '#5856D6',
//           alignSelf: 'flex-end'
//      },
//      cajaNaranja:{
//           // flex: 1,
//           width: 100,
//           height: 100,
//           borderWidth: 10,
//           borderColor: 'white',
//           backgroundColor: '#F0A23B'
//      },
//      cajaAzul:{
//           width: 100,
//           height: 100,
//           borderWidth: 10,
//           borderColor: 'white',
//           backgroundColor: '#28C4D9',
//           alignSelf: 'center'
//      },
// });

// 4. const styles = StyleSheet.create({
//      container:{
//           backgroundColor: '#28425B',
//           flex: 1,
//           justifyContent: 'space-between',
//           // height: '100%'
//      },
//      cajaMorada:{
//           width: 100,
//           height: 100,
//           borderWidth: 10,
//           borderColor: 'white',
//           backgroundColor: '#5856D6',
//           alignSelf: 'flex-end',
//           // top: 0
//      },
//      cajaNaranja:{
//           // flex: 1,
//           width: 100,
//           height: 100,
//           borderWidth: 10,
//           borderColor: 'white',
//           backgroundColor: '#F0A23B',
//           alignSelf: 'center'
//      },
//      cajaAzul:{
//           width: 100,
//           height: 100,
//           borderWidth: 10,
//           borderColor: 'white',
//           backgroundColor: '#28C4D9',
//           alignSelf: 'flex-start',
//      },
// });

// 5. const styles = StyleSheet.create({
//      container:{
//           backgroundColor: '#28425B',
//           flex: 1,
//           // alignItems: 'stretch',
//           flexDirection: 'row',
//           justifyContent: 'space-around'
//      },
//      cajaMorada:{
//           width: 100,
//           height: '100%',
//           borderWidth: 10,
//           borderColor: 'white',
//           backgroundColor: '#5856D6',
//           // flex: 1
//      },
//      cajaNaranja:{
//           width: 100,
//           height: '100%',
//           borderWidth: 10,
//           borderColor: 'white',
//           backgroundColor: '#F0A23B',
//           // flex: 1
//      },
//      cajaAzul:{
//           width: 100,
//           height: '100%',
//           borderWidth: 10,
//           borderColor: 'white',
//           backgroundColor: '#28C4D9',
//           // flex: 1
//      },
// });

// 6. const styles = StyleSheet.create({
//      container:{
//           backgroundColor: '#28425B',
//           flex: 1,
//           // alignItems: 'stretch',
//           // flexDirection: 'row',
//           // justifyContent: 'space-around'
//      },
//      cajaMorada:{
//           width: '100%',
//           height: 100,
//           borderWidth: 10,
//           borderColor: 'white',
//           backgroundColor: '#5856D6',
//           flex: 1
//      },
//      cajaNaranja:{
//           width: '100%',
//           height: 100,
//           borderWidth: 10,
//           borderColor: 'white',
//           backgroundColor: '#F0A23B',
//           flex: 1
//      },
//      cajaAzul:{
//           width: '100%',
//           height: 100,
//           borderWidth: 10,
//           borderColor: 'white',
//           backgroundColor: '#28C4D9',
//           flex: 2
//      },
// });

// 7. const styles = StyleSheet.create({
//      container:{
//           backgroundColor: '#28425B',
//           flex: 1,
//           alignItems: 'center',
//           // flexDirection: 'row',
//           justifyContent: 'center'
//      },
//      cajaMorada:{
//           width: 100,
//           height: 100,
//           borderWidth: 10,
//           borderColor: 'white',
//           backgroundColor: '#5856D6',
//           // flex: 1
//      },
//      cajaNaranja:{
//           width: 100,
//           height: 100,
//           borderWidth: 10,
//           borderColor: 'white',
//           backgroundColor: '#F0A23B',
//           // flex: 1
//      },
//      cajaAzul:{
//           width: 100,
//           height: 100,
//           borderWidth: 10,
//           borderColor: 'white',
//           backgroundColor: '#28C4D9',
//           // flex: 2
//      },
// });

// 8. const styles = StyleSheet.create({
//      container:{
//           backgroundColor: '#28425B',
//           flex: 1,
//           alignItems: 'center',
//           // flexDirection: 'row',
//           justifyContent: 'center'
//      },
//      cajaMorada:{
//           width: 100,
//           height: 100,
//           borderWidth: 10,
//           borderColor: 'white',
//           backgroundColor: '#5856D6',
//           // flex: 1
//      },
//      cajaNaranja:{
//           width: 100,
//           height: 100,
//           borderWidth: 10,
//           borderColor: 'white',
//           backgroundColor: '#F0A23B',
//           // alignSelf:'stretch'
//           left: 100
//           // flex: 1
//      },
//      cajaAzul:{
//           width: 100,
//           height: 100,
//           borderWidth: 10,
//           borderColor: 'white',
//           backgroundColor: '#28C4D9',
//           // flex: 2
//      },
// });

// 9. const styles = StyleSheet.create({
//      container:{
//           backgroundColor: '#28425B',
//           flex: 1,
//           alignItems: 'center',
//           // flexDirection: 'row',
//           justifyContent: 'center'
//      },
//      cajaMorada:{
//           width: 100,
//           height: 100,
//           borderWidth: 10,
//           borderColor: 'white',
//           backgroundColor: '#5856D6',
//           top: 100
//           // flex: 1
//      },
//      cajaNaranja:{
//           width: 100,
//           height: 100,
//           borderWidth: 10,
//           borderColor: 'white',
//           backgroundColor: '#F0A23B',
//           // alignSelf:'stretch'
//           left: 100
//           // flex: 1
//      },
//      cajaAzul:{
//           width: 100,
//           height: 100,
//           borderWidth: 10,
//           borderColor: 'white',
//           backgroundColor: '#28C4D9',
//           // flex: 2
//      },
// });

// 10. const styles = StyleSheet.create({
//      container:{
//           backgroundColor: '#28425B',
//           flex: 1,
//           alignItems: 'center',
//           flexDirection: 'row',
//           justifyContent: 'center'
//      },
//      cajaMorada:{
//           width: 100,
//           height: 100,
//           borderWidth: 10,
//           borderColor: 'white',
//           backgroundColor: '#5856D6',
//           // top: 100
//           // flex: 1
//      },
//      cajaNaranja:{
//           width: 100,
//           height: 100,
//           borderWidth: 10,
//           borderColor: 'white',
//           backgroundColor: '#F0A23B',
//           top: 50
//           // alignSelf:'stretch'
//           // left: 100
//           // flex: 1
//      },
//      cajaAzul:{
//           width: 100,
//           height: 100,
//           borderWidth: 10,
//           borderColor: 'white',
//           backgroundColor: '#28C4D9',
//           // flex: 2
//      },
// });