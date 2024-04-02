import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

type DiceImages = {
  [key: number]: any; // This index signature allows any number as key and any value
};

const diceImages : DiceImages = {
  1: require('./assets/One.png'),
  2: require('./assets/Two.png'),
  3: require('./assets/Three.png'),
  4: require('./assets/Four.png'),
  5: require('./assets/Five.png'),
  6: require('./assets/Six.png'),
}

export default function App() {

  const [dice , setDice] = useState(require("./assets/One.png"))

  const rollDice = () => {
    const randomNumber =Math.floor(Math.random() * 6) + 1;
    setDice(diceImages[randomNumber])
    console.log(randomNumber);
  }

  return (
    <View style={styles.container}>
      <View>
        <View style={{ marginBottom: 20}}>
          <Image source={dice} />
        </View>
        <TouchableOpacity onPress={rollDice}>
          <View style={styles.actionBtn}>
            <Text style={{ fontSize: 24, fontWeight: "bold"}}>Roll Dice</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionBtn: {
    borderRadius: 12,
    backgroundColor: '#fe3de8',
    paddingHorizontal:5,
    paddingVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        shadowColor: "#000",
        shadowOffset: {
          width: 4,
          height: 5
        },
        shadowOpacity: 0.35,
        shadowRadius: 4,
        elevation: 5
  }
});
