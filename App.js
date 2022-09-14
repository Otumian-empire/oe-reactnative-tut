import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
  Pressable,
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

  const handleRemove = (index) => {
    petNames.splice(index, 1);
    setPetNames([...petNames]);
  };

  const renderItem = (props) => (
    <Pressable onPress={() => handleRemove(props.index)}>
      <View key={props.index} style={styles.item}>
        <Text style={styles.text}>{props.item}</Text>
      </View>
    </Pressable>
  );

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="add pet name"
          placeholderTextColor={"#c7b6b0"}
          style={styles.textInput}
          onChangeText={handleTextChange}
          value={petName}
        />
        <Button title="Add pet" onPress={handleButtonPress} color={"#59CE8F"} />
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
    paddingHorizontal: 20,
    backgroundColor: "#ff1e00",
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
    color: "#E8F9FD",
  },
  item: {
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#E8F9FD",
    borderRadius: 50,
    backgroundColor: "#000",
  },
  text: {
    color: "#E8F9FD",
    fontSize: 16,
  },
});
