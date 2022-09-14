import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
} from "react-native";

export default function App() {
  const [petName, setPetName] = useState();
  const [petNames, setPetNames] = useState([]);

  const handleTextChange = (name) => {
    setPetName(name);
  };

  const handleButtonPress = () => {
    if (petName && petName.length > 0) {
      setPetNames([...petNames, petName]);
      setPetName("");
    }
  };

  const renderItem = (props) => (
    <View key={props.index} style={styles.item}>
      <Text style={styles.text}>{props.item}</Text>
    </View>
  );

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="add pet name"
          style={styles.textInput}
          onChangeText={handleTextChange}
          value={petName}
        />
        <Button title="Add pet" onPress={handleButtonPress} color={"black"} />
      </View>

      <View style={styles.petsContainer}>
        <FlatList
          data={petNames}
          renderItem={renderItem}
          alwaysBounceVertical={false}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  petsContainer: {
    flex: 5,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#eee",
    padding: 5,
    marginRight: 5,
    width: "80%",
  },
  item: {
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 50,
    backgroundColor: "#000",
  },
  text: {
    color: "white",
    fontSize: 16,
  },
});
