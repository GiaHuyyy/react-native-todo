import React from "react";
import { useEffect, useRef, useState } from "react";
import { Text, TextInput, View, Pressable, StyleSheet } from "react-native";
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface TodoActionProps {
  todos: Todo[];
  handleAddTodo: (title: string) => void;
  handleClearAllTodos: () => void;
  idEdit: number | null;
  titleEdit: string;
  handleEditTodo: (id: number, title: string) => void;
  handleCancelEditTodo: () => void;
}

function TodoAction({
  todos,
  handleAddTodo,
  handleClearAllTodos,
  titleEdit,
  idEdit,
  handleEditTodo,
  handleCancelEditTodo,
}: TodoActionProps) {
  const [title, setTitle] = useState("");

  const inputRef = useRef<TextInput>(null);

  // Add todo
  const addToto = () => {
    handleAddTodo(title);
    setTitle("");
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    if (idEdit === null) {
      setTitle("");
    } else {
      setTitle(titleEdit);
    }
  }, [titleEdit]);

  // Save edit todo
  const saveEditTodo = () => {
    if (idEdit === null) {
      return;
    }
    handleEditTodo(idEdit, title);
    setTitle("");
  };

  return (
    <View style={styles.wrapper}>
      {/* Input */}
      <TextInput
        ref={inputRef}
        value={title}
        placeholder="Add todo..."
        placeholderTextColor="#fff"
        style={[styles.input]}
        onChangeText={(text) => setTitle(text)}
      />

      {/* Button add */}
      <Pressable
        style={{
          display: idEdit === null ? "flex" : "none",
          ...styles.button,
          ...styles.buttonAdd,
        }}
        onPress={() => addToto()}
      >
        <Text style={styles.text}>Add</Text>
      </Pressable>

      {/* Button clear */}
      <Pressable
        style={{
          display: idEdit === null ? "flex" : "none",
          opacity: todos.length > 0 ? 1 : 0.4,
          pointerEvents: todos.length > 0 ? "auto" : "none",
          ...styles.button,
          ...styles.buttonClear,
        }}
        onPress={() => handleClearAllTodos()}
      >
        <Text style={styles.text}>Clear</Text>
      </Pressable>

      {/* Button save */}
      <Pressable
        style={{
          display: idEdit === null ? "none" : "flex",
          ...styles.button,
          ...styles.buttonAdd,
        }}
        onPress={() => saveEditTodo()}
      >
        <Text style={styles.text}>Save</Text>
      </Pressable>

      {/* Button cancel */}
      <Pressable
        style={{
          display: idEdit === null ? "none" : "flex",
          ...styles.button,
          ...styles.buttonClear,
        }}
        onPress={() => handleCancelEditTodo()}
      >
        <Text style={styles.text}>Cancel</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    marginTop: 1,
    borderWidth: 1,
    borderColor: "#688c8a",
  },
  input: {
    paddingLeft: 20,
    backgroundColor: "#9bb4b1",
    color: "#fff",
    height: "100%",
    flex: 1,
  },
  button: {
    alignItems: "center",
    paddingVertical: 12,
    width: 80,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  buttonAdd: {
    backgroundColor: "#688c8a",
  },
  buttonClear: {
    backgroundColor: "#ff9800",
  },
});
export default TodoAction;
