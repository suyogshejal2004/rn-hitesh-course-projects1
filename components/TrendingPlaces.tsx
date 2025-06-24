import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function TrendingPlaces() {
  return (
    <View style={{ marginTop: 20 }}>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={{ marginHorizontal: 'auto', marginTop: 10 }}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg',
          }}
        />
        <View style={styles.container}>
          <View style={{ marginHorizontal: 12 }}>
            <Text style={[styles.title, { marginBottom: 6 }]}>Taj Hotel</Text>
            <Text style={[styles.subtitle, { marginBottom: 4 }]}>
              Agra, India
            </Text>
            <Text style={[styles.description, { marginBottom: 4 }]}>
              The Taj Mahal, located in Agra, India, is a white marble mausoleum
              commissioned by Mughal emperor Shah Jahan in memory of his wife,
              Mumtaz Mahal.
            </Text>
            <Text style={styles.time}>12 Min Away</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    color: '#A8A8A8',
    fontWeight: 'bold',
    fontSize: 20,
    marginHorizontal: 10,
  },
  container: {
    height: 190,
    width: 380,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 5,
    justifyContent: 'center',
    paddingVertical: 10,
    
  },
  image: {
    height: 200,
    width: 380,
    resizeMode: 'cover',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 5,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '400',
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
  time: {
    fontSize: 16,
    fontWeight: '500',
    marginTop: 5,
  },
});
