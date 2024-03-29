import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

export default function FlatCard() {
  return (
    <View>
      <Text style={styles.headText}>FlatCard</Text>
      <View style={styles.container}>
      <View style={[styles.card, styles.cardOne]}>
        <Text>Red</Text>
      </View>
      <View style={[ styles.card, styles.cardTwo]}>
        <Text>Green</Text>
      </View>
      <View style={[ styles.card, styles.cardThree]}>
        <Text>Purple</Text>
      </View>
      <View style={[ styles.card, styles.cardThree]}>
        <Text>Purple</Text>
      </View>
      <View style={[ styles.card, styles.cardThree]}>
        <Text>Purple</Text>
      </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headText : {
        fontSize: 24,
        fontWeight: "bold",
        paddingHorizontal: 8
    },
    container : {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 5
    },
    card: {
        justifyContent: "center",
        alignItems: "center",
        width: 100,
        height: 100,
        borderRadius: 8,
        margin: 10
    },
    cardOne: {
        backgroundColor: "red"
    },
    cardTwo: {
        backgroundColor: "#0b8f65"
    },
    cardThree: {
        backgroundColor: "#872dcc"
    }
})