import { StyleSheet, Text, View, Image, ImageSourcePropType, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import type { PropsWithChildren } from 'react'
import * as Haptics from 'expo-haptics';

import DiceOne from './assets/One.png'
import DiceTwo from './assets/Two.png'
import DiceThree from './assets/Three.png'
import DiceFour from './assets/Four.png'
import DiceFive from './assets/Five.png'
import DiceSix from './assets/Six.png'


type DiceProps = PropsWithChildren<{
    imageUrl : ImageSourcePropType
}>


const Dice = ({imageUrl}: DiceProps): JSX.Element =>{
    return (
        <View style={{ marginBottom: 20}} >
            <Image style={styles.diceImage} source={imageUrl}/>
        </View>
    )
}


export default function App() {

    const [diceImage , setDiceImage] = useState<ImageSourcePropType>(DiceOne)

    const rollDice = () => {
        const randomNumber =Math.floor(Math.random() * 6) + 1;
        //add haptic feedback
        // Haptics.notificationAsync(
        //     Haptics.NotificationFeedbackType.Warning
        //   )
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
        console.log(randomNumber);

        switch(randomNumber){
            case 1:
                setDiceImage(DiceOne)
                break;
            case 2:
                setDiceImage(DiceTwo)
                break;
            case 3:
                setDiceImage(DiceThree)
                break;
            case 4:
                setDiceImage(DiceFour)
                break;
            case 5:
                setDiceImage(DiceFive)
                break;
            case 6:
                setDiceImage(DiceSix)
                break;
            default:
                setDiceImage(DiceOne)
        }
    }

  return (
    <View style={styles.container}>
    <Dice imageUrl={diceImage}/>
    <TouchableOpacity onPress={rollDice}>
          <View style={styles.actionBtn}>
            <Text style={{ fontSize: 24, fontWeight: "bold"}}>Roll Dice</Text>
          </View>
        </TouchableOpacity>
    </View>
  )
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
      paddingHorizontal: 30,
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
    },
    diceImage: {
        width: 200,
        height: 200,
    }
  });