import { StyleSheet, Text, View, SafeAreaView, 
  ScrollView, TouchableHighlightComponent, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'

import * as Yup from "yup"
import { Formik } from 'formik'  
import BouncyCheckbox from 'react-native-bouncy-checkbox'


const passwordSchema = Yup.object().shape({
  passwordLength : Yup.number()
  .min(8, "Should be a minimum of 8 characters")
  .max(17,"should not be more than 16 characters")
  .required("length is required")
})

export default function App() {

  const [password, setPassword] = useState("")
  const [ isPassGenerated , setIsPassGenerated] = useState(false)

  const [ lowerCase , setIsLowerCase] = useState(false)
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

    console.log(charactersList)

    const passwordResult = createPassword(charactersList, passwordLength)

    console.log(passwordResult)
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
    setIsLowerCase(false)
    setNumbers(false)
    setSymbols(false)
  }
  return (
    <SafeAreaView style={styles.appContainer}>
      <ScrollView >
        <View style={styles.formContainer}>
          <Text style={styles.title}>Password Generator</Text>
          <Formik
            initialValues={{ passwordLength: '' }}
            validationSchema={passwordSchema}
            onSubmit={values => {
              console.log(values)
              generatePasswordString(+values.passwordLength);
              
            }}
          >
       {({
         values,
         errors,
         touched,
         isValid,
         handleChange,
         handleSubmit,
         isSubmitting,
         handleReset,
         /* and other goodies */
       }) => (
        <>
          <View>
            <View style={styles.inputWrapper}>
              <View style={styles.inputColumn}>
                <Text style={styles.heading}>Password Length</Text>
                { touched.passwordLength && errors.passwordLength && (
                  <Text style={styles.errorText}>{errors.passwordLength}</Text>
                ) }
              </View>
              <TextInput
                style={styles.inputStyle}
                placeholder='Ex.8'
                placeholderTextColor={"#c5c5c9"}
                  value={values.passwordLength}
                  onChangeText={handleChange('passwordLength')}
                  keyboardType='numeric'
              />
             
            </View>
          </View>

          <View style={styles.inputWrapper}>
            <Text style={styles.heading}>Include LowerCase</Text>
            <BouncyCheckbox 
            disableBuiltInState
            isChecked={lowerCase}
            onPress={()=> setIsLowerCase((prev)=> !prev)}
            fillColor='#29ABB7'
            />
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.heading} >Include UpperCase</Text>
            <BouncyCheckbox
              disableBuiltInState
              isChecked={uppercase}
              onPress={()=> setIsUppercase((prev)=> !prev)}
              fillColor='#29ABB7'
            />
          </View>

          <View style={styles.inputWrapper}>
            <Text style={styles.heading}>Include Symbols </Text>
            <BouncyCheckbox 
              disableBuiltInState
              isChecked={symbols}
              onPress={()=> setSymbols((prev)=> !prev)}
              fillColor='#FC80A5'
            />
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.heading}>Include Numbers </Text>
            <BouncyCheckbox 
              disableBuiltInState
              isChecked={numbers}
              onPress={()=> setNumbers((prev)=> !prev)}
              fillColor='#C9A0DC'
            />
          </View>

          <View style={styles.formActions}>
            <TouchableOpacity disabled={!isValid || isSubmitting} 
            style={styles.primaryBtn}
            onPress={handleSubmit}
            >
              <Text style={styles.primaryBtnTxt}>Generate Password</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={styles.secondaryBtn}
            onPress={()=> {
              handleReset();
              resetPasswordState();
            }}
            >
              <Text style={styles.secondaryBtnTxt}>Reset</Text>
            </TouchableOpacity>
          </View>
        </>

       )}

          </Formik>
        </View>

        { isPassGenerated ? (
          <View style={[styles.card, styles.cardElevated]}>
            <Text style={styles.subTitle}>Result:</Text>
            <Text style={styles.description}>Description</Text>
            <Text selectable style={styles.generatedPassword}>{password}</Text>
          </View>
        ) : 
          <View>
            <Text style={{ color: "#979799", textAlign: "center", marginTop: 50}}>You Will see the Password here</Text>
          </View>
        }
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#090912',
  },
  formContainer: {
    margin: 8,
    padding: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 15,
    color: '#fff',
  },
  subTitle: {
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 2,
  },
  description: {
    color: '#758283',
    marginBottom: 8,
  },
  heading: {
    fontSize: 15,
    color: '#fff',
  },
  inputWrapper: {
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: 15
  },
  inputColumn: {
    flexDirection: 'column',
  },
  inputStyle: {
    padding: 8,
    width: '30%',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#1f1f26',
    color:"white",
  },
  errorText: {
    fontSize: 12,
    color: '#ff0d10',
  },
  formActions: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },
  primaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#5DA3FA',
  },
  primaryBtnTxt: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
  },
  secondaryBtn: {
    width: 120,
    flexDirection : 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#CAD5E2',
  },
  secondaryBtnTxt: {
    textAlign: 'center',
  },
  card: {
    padding: 12,
    borderRadius: 6,
    marginHorizontal: 12,
  },
  cardElevated: {
    backgroundColor: '#ffffff',
    elevation: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  generatedPassword: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 12,
    color:'#000'
  },
})