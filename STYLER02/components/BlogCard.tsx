import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function BlogCard() {

    const [ toggleShowText , setToggleShowText] = useState(3)

    const toggleText = () => setToggleShowText((prev)=> prev === 3 ? 12 : 3)

    function openWebsite(websiteUrl: string){
        Linking.openURL(websiteUrl)
    }

    // 

  return (
    <View style={{ marginBottom: 20}}>
      <Text style={styles.headText}>BlogCard</Text>
      <View style={styles.card}>
       <View style={styles.cardBody} >
        <View>
            <Text style={styles.title}>My Card</Text>
        </View>
        <Image style={styles.cardImage} source={{
            uri : "https://picsum.photos/id/237/300/300"
        }}/>
        <Text numberOfLines={toggleShowText} ellipsizeMode='tail'  style={styles.description} >
        Lorem ipsum dolor sit, amet consectetur 
        adipisicing elit. Esse enim aperiam ipsam commodi 
        voluptatibus fugiat? Ipsam, nostrum minima! Delectus, 
        illo pariatur enim officia voluptatum reprehenderit in 
        libero laudantium modi assumenda.
        </Text>
       </View>
       <View  style={{ marginHorizontal: 14 , marginBottom: 10}}>
        <TouchableOpacity style={{ marginBottom: 10}} onPress={toggleText}>
            <Text  style={{ color: "#fff" , fontSize: 15}}>
                { toggleShowText === 3 ? "Show More!🔤" : "Show Less!"}
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignSelf: "flex-end"}} onPress={()=> openWebsite("https://github.com/s-kvng/React-Native-Series")}>
            <Text  style={{ color: "#8d8f8f" , fontSize: 16}}>
              Github 👍
            </Text>
        </TouchableOpacity>
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
        marginHorizontal: 12,
        marginVertical: 16,
        borderRadius: 8,
        backgroundColor: "#0a0704",
        shadowColor: "#000",
        shadowOffset: {
            width: 5,
            height: 1
        },
        shadowOpacity: 0.50,
        shadowRadius: 5,

    },
    title: {
        color: "#fff",
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 15
    },
    cardImage: {
        width: "100%",
        height: 300,
        marginBottom: 20
    },
    description: {
        color: "#7a7d7d",
        fontSize: 15,
        marginBottom: 5

    },
    cardBody: {
        padding: 15
    },
    
})