import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import Flatcards from './components/Flatcards';
import ElevatedCards from './components/EleveatedCards';
import TrendingPlaces from './components/TrendingPlaces';
import BlogCard from './components/BlogCard';
import ContactList from './components/contactlist';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Flatcards />
        <ElevatedCards/>
       <TrendingPlaces/>
       <BlogCard/>
      <ContactList/>
      </ScrollView>
    </SafeAreaView>
  );
};
export default App;
const styles =StyleSheet.create ({
  container: {
   backgroundColor: '#312D31',
   flex: 1,
  
  },})

