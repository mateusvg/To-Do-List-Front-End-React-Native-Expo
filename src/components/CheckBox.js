import React, { useState, useEffect } from 'react';
import {
  CheckBox,
  Text,
  StyleSheet,
  View,
  FlatList,
  TextInput,
  ScrollView
} from 'react-native';

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [dataFetch, setDataFetch] = useState([]);

  //Metodo que pega todas as mensagens
  const getToDoList = async () => {
    try {
      const response = await fetch(
        `https://todolist-back-end-node.herokuapp.com/todolist`
      );
      const jsonObj = await response.json();
      setDataFetch(jsonObj);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getToDoList();
  }, []);

  return (

      <ScrollView>
        {dataFetch.map((data) => {
          return (
            <View key={data.idtodolist} style={styles.container}>
              <TextInput value={'Title: ' + data.title} />
              <TextInput value={'Description: ' + data.description} />
              <TextInput value={'Date: ' + data.date} />
            </View>
          );
        })}
      </ScrollView>

  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: 10,
    padding: 15,
    borderRadius: 15,
  },
});

export default App;
