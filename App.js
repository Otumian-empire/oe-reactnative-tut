import {
  Button,
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="add pet name" style={styles.textInput} />
        <Button title="Add pet" />
      </View>

      <View>
        <Text>Pet Names</Text>
      </View>
    </View>
  );
}

// Flex box and layouts
/* 
flex: n (n is an int which tells that element/container to expand to occupy the
 available space)
flexDirection: row|column (controls the orientation of the Main axis or Cross axis)

*/
const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
  },
  inputContainer: {
    // flex: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    // backgroundColor: "green ",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#eee",
    padding: 5,
    marginRight: 5,
    width: "80%",
  },
});
