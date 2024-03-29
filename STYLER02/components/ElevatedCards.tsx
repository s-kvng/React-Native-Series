import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headText}>ElevatedCards</Text>
      <ScrollView horizontal>
        <View style={[ styles.card, styles.cardOne]}>
            <Text>Tap</Text>
        </View>
        <View style={[ styles.card, styles.cardOne]}>
            <Text>Me</Text>
        </View>
        <View style={[ styles.card, styles.cardOne]}>
            <Text>To</Text>
        </View>
        <View style={[ styles.card, styles.cardOne]}>
            <Text>Scroll</Text>
        </View>
        <View style={[ styles.card, styles.cardOne]}>
            <Text>😄</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headText : {
        fontSize: 24,
        fontWeight: "bold",
        paddingHorizontal: 8
    },
    container: {
        // flex: 1,
        // flexDirection: "row",
        // justifyContent: "space-between",
        padding: 5
    },
    card: {
        justifyContent: "center",
        alignItems: "center",
        width: 100,
        height: 100,
        borderRadius: 8,
        margin: 10,
        shadowColor: "#000",
        shadowOffset:{
            width: 2,
            height: 1
        },
        shadowOpacity: 0.5,
        shadowRadius: 4
    },
    cardOne: {
        backgroundColor: "red"
    }
})