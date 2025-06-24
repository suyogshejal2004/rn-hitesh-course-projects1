import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';
export default function BlogCard() {
    function openwebpage(WebsiteLinck){
  Linking.openURL(WebsiteLinck);
    }
  return (
    <View style={{ marginTop: 10 }}>
      <Text style={styles.headingText}>BlogCard</Text>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 10,
        }}
      >
        <View style={styles.container}>
          <View
            style={{
              marginHorizontal: 12,
              marginTop: 6,
              alignContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text
              style={{ fontWeight: 'bold', marginBottom: 10, fontSize: 20 }}
            >
              The Rise of React Native
            </Text>
          </View>

          <Image
            style={styles.image}
            source={{
              uri: 'https://www.aceinfoway.com/blog/wp-content/uploads/2020/04/Why-should-you-choose-React-Native-for-your-next-Mobile-Development-Project.jpg',
            }}
          />
          <Text style={{color:'white', marginHorizontal:12}}>
            React Native is changing the future of mobile app development. With
            a single codebase, it lets developers build apps for both Android
            and iOS. It offers fast performance, quicker development, and lower
            costs. That’s why leading companies are choosing React Native today.
          </Text>
          <View style = {{ justifyContent:'center',  marginTop:10, flexDirection:'row', gap:90}}>
            <TouchableOpacity style={styles.button} onPress={()=> openwebpage('https://galaxies.dev/article/time-for-react-native')}>
                <Text style={{fontWeight: 'bold',}}>
                    Read More
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=> openwebpage('https://www.linkedin.com/in/suyog-shejal-8637a3316/')}>
                <Text style={{fontWeight: 'bold',}}>
                    Follow Me
                </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  headingText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#A8A8A8',
    marginHorizontal: 10,
    
  },
  image:{
     height: 200,
    width: 380,
  },
  container:{
    backgroundColor:'#ed6100',
    height: 410,
    width: 380,
    borderRadius: 20,
  },
  button:{
    backgroundColor: 'white',
    
    paddingHorizontal:20,
    paddingVertical:10,
    borderRadius:10
  }
});
