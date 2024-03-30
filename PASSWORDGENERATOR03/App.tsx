import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

import * as Yup from "yup"

const passwordSchema = Yup.object().shape({
  passwordLength : Yup.number()
  .min(8, "Should be a minimum of 8 characters")
  .max(17,"should not be more than 16 characters")
  .required("length is required")
})

export default function App() {

  const [password, setPassword] = useState("")
  const [ isPassGenerated , setIsPassGenerated] = useState(false)

  const [ lowerCase , setLowerCase] = useState(false)
  const [ uppercase , setIsUppercase] = useState(false)
  const [ numbers , setNumbers] = useState(false)
  const [ symbols , setSymbols] = useState(false)

  const generatePasswordString = (passwordLength : number) => {
    let charactersList = "";

    const uppercaseChar= "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const lowercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numberChar = "0123456789"
    const specialChar = "!@#$%^&*()_+"

    if(uppercase){
      charactersList += uppercaseChar
    }
    if(lowerCase){
      charactersList += lowercaseChar.toLowerCase
    }
    if(numbers){
      charactersList += numberChar
    }
    if(symbols){
      charactersList += specialChar
    }

    const passwordResult = createPassword(charactersList, passwordLength)

    setPassword(passwordResult)
    setIsPassGenerated(true)
  }

  const createPassword = ( characters : string , passwordLength: number) =>{
    let result = "";
    for (let i = 0; i < passwordLength; i++) {
      const charactersIndex = Math.round(Math.random() * characters.length);
      result += characters.charAt(charactersIndex)
    }

    return result
  }

  const resetPasswordState = () => {
    setPassword("")
    setIsPassGenerated(false)
    setIsUppercase(false);
    setLowerCase(false)
    setNumbers(false)
    setSymbols(false)
  }
  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

const styles = StyleSheet.create({})