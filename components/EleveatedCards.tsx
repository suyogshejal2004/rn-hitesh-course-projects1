import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingtext}>Elevated Cards </Text>
      <ScrollView horizontal={true}>   <View style={styles.container}>
        <View style={styles.box}>
            <Text>Tap </Text>
        </View>
         <View style={styles.box}>
            <Text>me </Text>
        </View>
         <View style={styles.box}>
            <Text>TO </Text>
        </View>
         <View style={styles.box}>
            <Text>scroll </Text>
        </View>
      </View></ScrollView>
   
    </View>
  );
}
const styles = StyleSheet.create({
  headingtext: {
    color: '#A8A8A8',

    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 20,
    marginHorizontal: 10,
  },
  box:{
    height:100,
    width:100,
    backgroundColor:'#CAD6E3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container:{
  flexDirection: 'row',
  gap:12,
  marginHorizontal:10,
  marginTop: 15,
  
  }
});
