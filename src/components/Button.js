import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function ButtonInsert() {
  return (
    <View>
      <TouchableOpacity style={styles.icon} onPress={() => {}}>
       <Text> Insert </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
icon:{
  backgroundColor:'white',
  borderRadius:10,
  height:40,
  textAlign:'center',
  padding:10,
  margin:10,
}

})
