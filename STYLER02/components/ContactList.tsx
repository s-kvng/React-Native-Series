import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {

    const contacts = [
        {
            uid : 1,
            name : "Nathaniel",
            status: "Learning React Native 💯",
            imageUrl: "https://avatars.githubusercontent.com/u/105977478?v=4"
        },
        {
            uid : 2,
            name : "Kobby",
            status: "Learning Nextjs ⚖️",
            imageUrl: "https://picsum.photos/id/1/200/300"
        },
        {
            uid : 3,
            name : "Kwame",
            status: "Learning React 🛰️",
            imageUrl: "https://picsum.photos/id/133/200/300"
        },
        {
            uid : 4,
            name : "Mawuli",
            status: "Off to enjoy the holidays 🇪🇦",
            imageUrl: "https://picsum.photos/id/1/200/300"
        },
        
    ]

  return (
    <View style={{ marginBottom: 20 }}>
      <Text style={styles.headText}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        { contacts.map(({ uid, name , status, imageUrl })=> (
            <View key={uid} style={styles.userCard}>
                <Image
                source={{
                    uri : imageUrl
                }}
                style={styles.userImage}
                />
                <View>
                    <Text style={styles.username}>{name}</Text>
                    <Text style={styles.userStatus}>{status}</Text>
                </View>
            </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headText:{
        fontSize: 24,
        fontWeight: "bold",
        paddingHorizontal: 8
    },
    container: {
        paddingHorizontal: 16
    },
    userCard: {
        flexDirection: "row",
         alignItems: "center",
         gap: 50,
         marginVertical: 2,
         paddingVertical: 7,
         paddingHorizontal: 5,
         borderBottomWidth: 1,
         borderBottomColor: "black",
         backgroundColor: "#111d3d",
         borderRadius: 8
    },
    userImage: {
        height: 60,
        width: 60,
        borderRadius: 60/2
    },
    username: {
        fontSize: 16,
        fontWeight: "600",
        color: "white"
    },
    userStatus: {
        color: "white",
        fontSize: 15,
        fontWeight: "500"
    }
})