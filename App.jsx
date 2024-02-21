import { Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";

export default function App() {
  const [task, setTask] = useState("");

	return (
<View style={styles.container}>
  <View style={styles.form}>
    <TextInput
      placeholder="Digite uma nova tarefa"
      style={styles.inputline}
      onChangeText={setTask}
      value={task}
    />
    <TouchableOpacity
      style={styles.button}
    >
      <Text style={styles.buttonText}>Adicionar</Text>
    </TouchableOpacity>
  </View>
  <StatusBar style="auto" />
</View>
	);
}
const styles = StyleSheet.create({
  padding: {
    padding: 50,
  },
  form: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  inputline: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    width: "75%",
    padding: 10,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
  },
  container: {
    marginTop: 50,
    backgroundColor: "#fff",
  },
});
