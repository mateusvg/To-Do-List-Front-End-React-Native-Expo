import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput, StyleSheet  } from 'react-native';



export default function List() {

const [title, setTitle] = useState('')
const [description, setDescription] = useState('')
const [date, setDate]= useState('')
const uri2 = `https://todolist-back-end-node.herokuapp.com/todolistsend`

  const cadastrar = async () => {
      const resp = await fetch(uri2, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, description, date }),
      });
      
  };

  return (
    <View>
      <Text>Create to do iten</Text>
      <TextInput style={styles.input}  onChangeText={(text) => setTitle(text)} />
      <TextInput  style={styles.input}   onChangeText={(text) => setDescription(text)} />
       <Button  title="Postar" onPress={() => cadastrar()} /> 
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 15,
    height:40,
    padding:10,
  },
});
