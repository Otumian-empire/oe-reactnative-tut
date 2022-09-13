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
    <View style={styles.container}>
      <View style={styles.helloView}>
        <Text style={styles.text}>Hello world</Text>
        <TextInput style={styles.input} placeholder={"Enter some text"} />
      </View>
      <Text style={styles.text}>Another Hello world Text</Text>
      <Button title="Hello there" color={"green"} />
    </View>
  );
}

// this approach has auto-completion support
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  helloView: {
    width: Dimensions.get("screen").width * 0.9,
  },
  input: {
    borderWidth: 2,
    borderColor: "#abe12c",
    color: "black",
    padding: 15,
    margin: 10,
    backgroundColor: "#ccc",
  },
  text: {
    fontSize: 24,
    margin: 10,
    borderColor: "blue",
    borderWidth: 1,
    padding: 7,
  },
});
