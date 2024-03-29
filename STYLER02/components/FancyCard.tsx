import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
        <Text style={styles.headText}>Fancy Card</Text>
        <View style={[styles.card]}>
            <Image accessible accessibilityLabel='A location card' resizeMode="cover" style={styles.Image} source={{
                uri : "https://picsum.photos/300/300"
            }}/>
            <View style={styles.cardBody}>
                <Text style={styles.cardTitle}>Greater Accra</Text>
                <Text style={styles.cardLabel}>Accra</Text>
                <Text style={styles.cardDescription}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Deserunt consequuntur alias autem saepe consequatur earum 
                    distinctio libero. Provident velit, dignissimos fugiat ratione
                     error iure, dicta, ea iste voluptates placeat atque!
                </Text>
                <Text style={styles.cardFooter}>10 mins away</Text>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headText:{
        fontSize: 24,
        fontWeight: "bold",
        paddingHorizontal: 8
    },
    card: {
        alignSelf: "center",
        width: "80%",
        marginHorizontal: 12,
        marginVertical: 16,
        borderRadius: 8,
        backgroundColor: "#0a0704",
        shadowColor: "#000",
        shadowOffset: {
            width: 4,
            height: 1
        },
        shadowOpacity: 0.45,
        shadowRadius: 8
    },
    Image: {
        height: 250,
        width: "100%",
        marginBottom: 10,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8
    },
    cardBody: {
        padding: 12
    },
    cardTitle:{
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 5
    },
    cardLabel: {
        color: "white",
        fontSize: 16,
        fontWeight: "600",
        marginBottom: 10
    },
    cardDescription: {
        color: "#7a7d7d",
        fontSize: 15,
        marginBottom: 5

    },
    cardFooter: {
        color: "#5f6161",
        fontSize: 14,
    }
    
})