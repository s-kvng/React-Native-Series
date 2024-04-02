import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native';

export default function App() {

  const [ randomColor, setRandomColor ] = useState("#ffffff")

  const generateColorCode = () =>{
    // The parameter 16 passed to toString() specifies that the number should be converted into base-16 (hexadecimal) representation.
    //by 16777215. This number is chosen because it's the decimal equivalent of the hexadecimal color code FFFFFF, which represents white
    let randomColorCode = Math.floor(Math.random() * 16777215).toString(16);
    console.log(randomColorCode)
    setRandomColor(`#${randomColorCode}`)
  }

  return (
    <>
    <StatusBar style="auto" />
    <View style={[styles.container, {backgroundColor: randomColor,}]}>
     <TouchableOpacity onPress={generateColorCode}>
      <View style={styles.actionBtn}>
        <Text style={styles.actionBtnTxt}>Press Me</Text>
      </View>
     </TouchableOpacity>
      
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionBtn : {
    borderRadius: 12,
    paddingHorizontal: 40,
    paddingVertical: 12,
    backgroundColor: "#fD4675"
  },
  actionBtnTxt : {
    fontSize: 24,
    fontWeight: 'bold'  
  }
});
