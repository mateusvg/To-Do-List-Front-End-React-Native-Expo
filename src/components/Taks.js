import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Checkbox from './CheckBox'

export default function AssetExample(prop) {
  return (
    <View style={styles.container}>
    <Checkbox/>
      <Text style={styles.paragraph}>
        {prop.props}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    margin:10,
    padding: 24,
  },
  paragraph: {
    flex:1,
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },

});
