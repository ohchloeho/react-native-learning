import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Keyboard } from "react-native";
import { fontSizes, spacing } from "./utils/sizes";
import { RoundBtn } from "./components/RoundBtn";
import { TaskCont } from "./components/TaskCont";
import { colors } from "./utils/colors";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");
  const [error, setError] = useState(false);

  const handleAddTask = () => {
    if (text) {
      setTasks([...tasks, { task: text }]);
      setText(null);
      setError(false);
    } else {
      setError(true);
    }
  };

  const completeTask = (index) => {
    let itemsCopy = [...tasks];
    itemsCopy.splice(index, 1);
    setTasks(itemsCopy);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>this is a to-do app</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="add a task..."
          value={text}
          onChangeText={(text) => setText(text)}
        />
        <RoundBtn
          title=">"
          size={40}
          onPress={() => {
            handleAddTask();
          }}
        />
      </View>

      <View style={styles.outputContainer}>
        {!error && <Text>These are your tasks</Text>}
        {error && <Text>Please enter a task</Text>}
        {tasks.length > 0 ? (
          tasks.map((task, id) => {
            return (
              <View style={styles.taskContainer} key={id}>
                <TaskCont taskName={task.task} />
                <RoundBtn
                  title="X"
                  size={40}
                  onPress={() => {
                    completeTask(id);
                  }}
                />
              </View>
            );
          })
        ) : (
          <Text>Enter a task to begin!</Text>
        )}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  textHeader: {
    fontSize: fontSizes.xl,
    marginTop: spacing.xxl,
  },
  inputContainer: {
    padding: spacing.sm,
    borderRadius: spacing.sm,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    borderWidth: 2,
    margin: spacing.sm,
  },
  textInput: {
    flex: 1,
    padding: spacing.sm,
  },
  outputContainer: {
    flex: 1,
    flexDirection: "column",
    width: 360,
    overflow: "scroll",
  },
  taskContainer: {
    borderColor: colors.black,
    borderRadius: spacing.sm,
    borderWidth: 2,
    padding: spacing.sm,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: spacing.sm,
  },
});
