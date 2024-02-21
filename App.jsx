import { Text, View, StyleSheet, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";

export default function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim().length > 0) {
      setTasks([...tasks, {
        id: Math.random().toString(),
        value: task
      }]);
      setTask("");
    }
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          placeholder="Digite uma nova tarefa"
          style={styles.inputline}
          onChangeText={setTask}
          value={task}
        />
        <TouchableOpacity onPress={addTask}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Adicionar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.listitle}>
        {tasks.length === 0 ? (
          <Text style={styles.emptylist}>Nenhuma Tarefa Cadastrada</Text>
        ) : (
          <Text style={styles.filledlist}>Tarefas Cadastradas</Text>
        )}
      </View>

      <ScrollView style={styles.scrollist} showsVerticalScrollIndicator={false}>
      {tasks.map((task) => (
    <View
      key={task.id}
      style={styles.listitem}
    >
      <Text style={styles.withtext}>{task.value}</Text>
      <TouchableOpacity
        onPress={() => removeTask(task.id)}
        style={styles.remove}
      >
        <Text style={styles.buttonText}>Remover</Text>
      </TouchableOpacity>
    </View>
  ))}
</ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  padding: {
    padding: 20,
  },
  form: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
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
  listitle: {
    marginBottom: 10,
  },
  emptylist: {
    textAlign: "center",
    color: "red",
  },
  filledlist: {
    textAlign: "center",
    color: "green",
  },
  scrollist: {
    marginBottom: 24,
  },
  listitem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    paddingBottom: 5,
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  withtext: {
    width: "75%",
  },
  remove: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
    color: "#fff",
  },
});
