import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, FlatList , TextInput , Pressable, Alert} from 'react-native';
// import SnackBar from 'react-native-snackbar-component'

import CurrencyButton from './components/CurrencyButton';
import {currencyByRupee} from './constants';
import { useState } from 'react';

export default function App() {

  const [inputValue , setInputValue] = useState("")
  const [resultValue, setResultValue] = useState("");
  const [targetCurrency, setTargetCurrency] = useState("");
  const [visible, setVisible] = useState(false);

  const buttonPressed = (targetValue: Currency) =>{
    if (!inputValue) {
      setVisible(true);
      return Alert.alert("Empty Field","Enter a Value to convert")
      
    }

    const inputAmount = parseFloat(inputValue)
    if(!isNaN(inputAmount)){
      const convertedValue = inputAmount * targetValue.value;
      const result = `${targetValue.symbol} ${convertedValue.toFixed(2)} 🤑`;
      setResultValue(result);
      setTargetCurrency(targetValue.name)
    }
    else{
      setVisible(true);
      return Alert.alert("Failed to convert","Not a valid number ")
    }

  }

  // const hideSnackbar = () => {
  //   setVisible(false);
  // };

  return (
    <SafeAreaView style={styles.container}>
     <View style={styles.topContainer}>
      <View style={styles.rupeesContainer}>
        <Text style={styles.rupee}>₹</Text>
        <TextInput
        style={styles.inputAmountField}
        maxLength={13} 
        value={inputValue} 
        clearButtonMode='always' //only for ios 
        onChangeText={setInputValue}
        keyboardType='number-pad'
        placeholder='Enter amount in Rupee' 
        />
      </View>
     <View style={{ margin: 15}}>
      {
          resultValue && (
            <Text style={styles.resultTxt}>
              {resultValue}
            </Text>
          )
        }
     </View>

      <View style={styles.bottomContainer}>
        <FlatList
        numColumns={3}
        data={currencyByRupee}
        keyExtractor={item => item.name}
        renderItem={({item})=> (
          <Pressable 
          style={[styles.button, targetCurrency == item.name && styles.selected ]}  
          onPress={() => buttonPressed(item)}>
            <CurrencyButton
            name={item.name}
            flag={item.flag}
            />
          </Pressable>
        )}
        />
      </View>
      
     </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#515151',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  topContainer: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  rupeesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom : 15,
  },
  inputAmountField: {
    height: 40,
    width: 200,
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
  },
  rupee: {
    fontSize: 50,
    color: "white",
  },
  resultTxt: {
    fontSize: 30,
    color: "#000000",
  },
  bottomContainer: {
    flex: 3,
    width: "100%",
  },
  button: {
    flex: 1,

    margin: 12,
    height: 60,

    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  selected: {
    backgroundColor: "#1db",
  },
});


{/* <SnackBar
      visible={visible}
      onDismiss={hideSnackbar}
      message="Enter a value to convert"
      accessibilityLabel="Snackbar message"
    /> */}