// import { useCallback, useEffect, useState } from "react";
import { Text, View, Pressable, StyleSheet } from "react-native";
import { CheckBox } from "react-native-elements";

import Octicons from "@expo/vector-icons/Octicons";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface TodoItemProps {
  todo: Todo;
  handleChangeCheckBox: (id: number) => void;
  handleGetTodo: (id: number, title: string) => void;
  handleDeleteTodo: (id: number) => void;
  idEdit: number | null;
}

function TodoItem({
  todo: { id, title, completed },
  handleChangeCheckBox,
  handleGetTodo,
  handleDeleteTodo,
  idEdit,
}: TodoItemProps) {
  const handleEdit = () => {
    handleGetTodo(id, title);
  };

  return (
    <View style={styles.wrapper}>
      {/* CheckBox */}
      <CheckBox checked={completed} onPress={() => handleChangeCheckBox(id)} />

      {/* Title */}
      <Text
        style={{
          textDecorationLine: completed === false ? "none" : "line-through",
          color: completed === false ? "black" : "#688c8a",
          flex: 1,
        }}
      >
        {title}
      </Text>
      <View style={[styles.wrapper, styles.groupButton]}>
        {/* Button edit */}
        <Pressable
          style={{
            opacity: completed === false ? 1 : 0.4,
            pointerEvents: completed === false ? "auto" : "none",
            ...styles.button,
            ...styles.buttonEdit,
          }}
          onPress={() => handleEdit()}
        >
          <Text style={styles.text}>{idEdit === id ? "Editing" : "Edit"}</Text>
        </Pressable>

        {/* Button delete */}
        <Pressable style={[styles.button, styles.buttonDelete]} onPress={() => handleDeleteTodo(id)}>
          <Text style={styles.text}>
            <Octicons name="trash" size={24} color="white" />
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",

    marginTop: 1,
    borderWidth: 1,
    borderColor: "#688c8a",
  },
  groupButton: {
    borderWidth: 0,
    marginTop: 0,
  },
  button: {
    alignItems: "center",
    paddingVertical: 12,
    width: 80,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  buttonDelete: {
    backgroundColor: "red",
  },
  buttonEdit: {
    backgroundColor: "#00bcd4",
  },
});
export default TodoItem;
