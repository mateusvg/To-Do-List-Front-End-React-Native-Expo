import React from 'react'
import {Text, View, StyleSheet, Image} from 'react-native'

export default function Cards(){
  return(
    <View style={styles.container}>
    <Image  source={require('../assets/sun-bright-rays-sunny-weather-33960.png')}/>
    <Text style={styles.text}>36°</Text>
    </View>
  )
}

const styles = StyleSheet.create({

container:{
  display:'flex',
  backgroundColor:'white',
  justifyContent:'center',
  alignItems:'center',
  padding:10,
  margin:10,
  borderRadius:10,
}, 
text:{
  fontSize:46
}

})