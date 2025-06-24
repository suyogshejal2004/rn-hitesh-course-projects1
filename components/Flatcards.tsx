import { Text, View, StyleSheet, ScrollView } from 'react-native';


export default function Flatcards() {
  return (
    <View>
      <Text style={style.text}>Flat Cards</Text>
      <View style={style.container}>
        <View style={[style.box, style.box1]}>
          <Text style={style.Boxtext}>Red</Text>
        </View>
        <View style={[style.box, style.box2]}>
          <Text style={style.Boxtext}>Blue</Text>
        </View>
        <View style={[style.box, style.box3]}>
          <Text style={style.Boxtext}>Green</Text>
        </View>
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    
  },

  text: {
    color: '#A8A8A8',
    marginTop:20,
    marginHorizontal: 10,
    
    fontSize: 20,
    fontWeight: 'bold',
  },
  Boxtext: {
    color: 'white',
    fontWeight: 'bold',
  },
  box: {
    height: 100,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    borderRadius: 10,
    elevation: 5,
  },
  box1: {
    backgroundColor: 'red',
  },
  box2: {
    backgroundColor: 'blue',
  },
  box3: {
    backgroundColor: 'green',
  },
});
