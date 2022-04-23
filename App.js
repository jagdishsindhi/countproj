import { StatusBar } from 'expo-status-bar';
import { React, useState } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { linear } from 'react-native/Libraries/Animated/Easing';
// import LinearGradient from 'react-native-linear-gradient' // import LinearGradient
import { LinearGradient } from 'expo-linear-gradient';



export default function App() {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image
        style={{ width: 40, height: 40, marginBottom: 35,alignSelf:'flex-start',left:20 }}
        source={require('./assets/logo.png')}
      />
      <Text style={{ color: 'white', alignSelf: 'flex-start' ,left:20}}>Balance Store</Text>
      <LinearGradient
        start={{ x: 0.2, y: 0.25 }} end={{ x: 1.2, y: 0.0 }}
        locations={[0, 0.8]}
        colors={["#FC5C4B", "#FFA72F"]}
        style={styles.card}>
        <Button onPress={() => setCount(count + 1)} title="Click me" />
        <Text style={{ color: 'white', fontWeight: 'bold', alignSelf: 'flex-start' }}>${count}</Text>
      </LinearGradient>
      <LinearGradient
        start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
        locations={[0, 0.5]}
        colors={["#6d1205", "#822702"]}
        style={styles.card1}>

      </LinearGradient>
      <LinearGradient
        start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
        locations={[0, 0.5]}
        colors={["#5e1c01", "#4a1601"]}
        style={styles.card2}>
      </LinearGradient>

      <View
        style={styles.card3}>
        <Text style={{ color: 'white' }}>Statistics</Text>
      </View>
      <View
        style={styles.card3}>
        <Text style={{ color: 'white' }}>Popular Flowers</Text>
      </View>
      <View
        style={styles.card3}>
        <Text style={{ color: 'white' }}>Orders</Text>
      </View>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 30
  },
  card: {
    top:25,
    height: 190,
    width: "90%",
    alignItems: 'center',
    borderRadius: 30,
    padding: 50,
    zIndex: 10,
    elevation: 10,
    shadowColor: '#52006A',
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },

  card1: {
    height: 25,
    width: "75%",
    alignItems: 'center',
    borderRadius: 30,
    zIndex: 2,
    top: 10
  },
  card2: {
    height: 22,
    width: "65%",
    alignItems: 'center',
    borderRadius: 30,
    zIndex: 1,
    bottom:5,
    right: 8
  },
  card3: {
    top: 50,
    justifyContent: 'center',
    backgroundColor: '#1C0C36',
    marginTop: 20,
    height: 130,
    width: "90%",
    alignItems: 'center',
    borderRadius: 30,
    zIndex: 10,
  }
});

