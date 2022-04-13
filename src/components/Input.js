import React from 'react';
import { StyleSheet, TextInput } from 'react-native';


const ComponentInput = (props) => {
  return (
    <TextInput style={styles.input} placeholder={props.placeHolder} onChangeText={(text) => setTitle(text)}/>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 15,
    height:40,
    padding:10,
  },
});

export default ComponentInput;
