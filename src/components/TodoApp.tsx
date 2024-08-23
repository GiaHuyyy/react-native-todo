import { View, StyleSheet, Alert } from "react-native";
import { useState, useCallback } from "react";

// import "react-native-get-random-values";
// import { v4 as uuidv4 } from "uuid";

import Header from "./layout/Header";

import TodoAction from "./TodoAction";
import TodoList from "./TodoList";

function TodoApp() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Setup development environment",
      completed: true,
    },
    {
      id: 2,
      title: "Develop website and add content",
      completed: false,
    },
    {
      id: 3,
      title: "Deploy to live server",
      completed: false,
    },
  ]);

  // Function to handle checkbox change
  const handleChangeCheckBox = useCallback((id: number) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
    });
  }, []);

  // Handle add todo
  const handleAddTodo = useCallback((title: string) => {
    if (title) {
      setTodos((prevTodos) => {
        return [
          ...prevTodos,
          {
            id: todos.length + 1,
            title: title,
            completed: false,
          },
        ];
      });
    }
  }, []);

  // Handle edit todo
  const [titleEdit, setTitleEdit] = useState<string>("");
  const [idEdit, setIdEdit] = useState<number | null>(null);

  const handleGetTodo = useCallback((id: number, title: string) => {
    setTitleEdit(title);
    setIdEdit(id);
  }, []);

  // Handle save edit todo
  const handleEditTodo = useCallback((id: number, title: string) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            title: title,
          };
        }
        setIdEdit(null);
        return todo;
      });
    });
  }, []);

  // Handle cancel edit todo
  const handleCancelEditTodo = useCallback(() => {
    setTitleEdit("");
    setIdEdit(null);
  }, []);

  // Handle delete todo
  const handleDeleteTodo = useCallback((id: number) => {
    Alert.alert("Delete Todo ?", "Are you sure?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () =>
          setTodos((prevTodos) => {
            return prevTodos.filter((todo) => todo.id !== id);
          }),
      },
    ]);
  }, []);

  // Handle clear all todos
  const handleClearAllTodos = useCallback(() => {
    Alert.alert("Clear all todo ?", "Are you sure?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => {
          setTodos([]);
          setTitleEdit("");
        },
      },
    ]);
  }, []);

  return (
    <View style={styles.app}>
      <Header />
      <TodoAction
        todos={todos}
        handleAddTodo={handleAddTodo}
        handleClearAllTodos={handleClearAllTodos}
        titleEdit={titleEdit}
        idEdit={idEdit}
        handleEditTodo={handleEditTodo}
        handleCancelEditTodo={handleCancelEditTodo}
      />
      <TodoList
        todos={todos}
        handleChangeCheckBox={handleChangeCheckBox}
        handleGetTodo={handleGetTodo}
        handleDeleteTodo={handleDeleteTodo}
        idEdit={idEdit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    marginTop: 40,
  },
});
export default TodoApp;
