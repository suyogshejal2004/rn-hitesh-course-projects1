import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';

export default function ContactList() {
  const people = [
    {
      uid: '1',
      name: 'Suyog Shejal',
      status: 'Aspiring App Developer',
      imageUrl: require('../assets/photo/image.png'), // local image
    },
    {
      uid: '2',
      name: 'Diya Sharma',
      status: 'tech enthusiast',
      imageUrl: 'https://randomuser.me/api/portraits/women/21.jpg',
    },
    {
      uid: '3',
      name: 'Kabir Verma',
      status: 'Loves React Native',
      imageUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      uid: '4',
      name: 'Sneha Reddy',
      status: 'UI/UX Enthusiast',
      imageUrl: 'https://randomuser.me/api/portraits/women/45.jpg',
    },
    {
      uid: '5',
      name: 'Yash Patil',
      status: 'Frontend Developer',
      imageUrl: 'https://randomuser.me/api/portraits/men/54.jpg',
    },
  ];

  return (
    <ScrollView style={{ marginTop: 20 }}>
      <Text style={styles.headingText}>Contact List</Text>
      {people.map(({ uid, name, status, imageUrl }) => (
        <View key={uid} style={styles.container}>
          <Image
            style={styles.image}
            source={typeof imageUrl === 'string' ? { uri: imageUrl } : imageUrl}
          />
          <View>
            <Text style={styles.nameText}>{name}</Text>
            <Text style={styles.statusText}>{status}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#A8A8A8',
    marginHorizontal: 10,
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  nameText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 8,
  },
  statusText: {
    color: '#f0f0f0',
    marginTop: 2,
  },
  container: {
    flexDirection: 'row',
    backgroundColor: '#ed6100',
    margin: 7,
    borderRadius: 10,
    padding: 8,
    alignItems: 'center',
  },
});
