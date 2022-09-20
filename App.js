import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, Button, Pressable} from 'react-native';
import ReceiptList from "./components/receiptList";
import {useState} from "react";

export default function App() {
  const [isListOpened, setIsListOpened] = useState(false);

  const onButtonClick = () => {
    setIsListOpened(!isListOpened)
  }

  return (
    <View style={styles.container}>
      <Pressable onPress={onButtonClick} style={styles.button}>
        <Text style={styles.buttonText}>
          {isListOpened ? 'hide receipts' : 'show all receipts'}
        </Text>
      </Pressable>

      {isListOpened && <ReceiptList/>}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 15
  },
  button: {
    width: "40%",
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#ABFCCDFF',
    marginBottom: 10
  },
  buttonText: {
    textTransform: "capitalize",
    textAlign: "center"
  }
});
