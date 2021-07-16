import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CheckboxGroup } from './components/CheckboxGroup';
import { RadioButtonGroup } from './components/RadioButtonGroup';

const options: any[] = [{
  id: '1',
  label: 'Foo' 
},{
  id: '2',
  label: 'Bar' 
},{
  id: '3',
  label: 'Baz' 
}]

export default function App() {
  return (
    <View style={styles.container}>
      <CheckboxGroup title="Dette er en checkbox group" options={options}/>
      <View style={{height: 20}}/>
      <RadioButtonGroup title="Dette er en radio button group" options={options}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
