import { StyleSheet, Text, View } from 'react-native'
import type { PropsWithChildren } from 'react'

type CurrencyButtonType = PropsWithChildren<{
    name: string;
    flag : string;
}>

export default function CurrencyButton( props : CurrencyButtonType ): JSX.Element {
  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.flag}>{props.flag}</Text>
      <Text style={styles.country}>{props.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonContainer : {
    alignItems: 'center'
},
    flag: {
        fontSize: 30,
    },
    country:{
        fontSize: 15,
        color: '#000000',
        marginBottom: 4,
    }
})