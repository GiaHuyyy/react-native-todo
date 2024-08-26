import { View, StyleSheet, Alert } from "react-native";
import { useState, useCallback, useEffect } from "react";

// import "react-native-get-random-values";
// import { v4 as uuidv4 } from "uuid";

import axios from "axios";

import Header from "./layout/Header";

import TodoAction from "./TodoAction";
import TodoList from "./TodoList";

function TodoApp() {
  const [todos, setTodos] = useState([] as any[]);

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
      const todoData = {
        title: title,
        completed: false,
      };
      axios.post("https://jsonplaceholder.typicode.com/todos", todoData).then((response) => {
        setTodos((prevTodos) => {
          console.log(response.data);
          return [...prevTodos, response.data];
        });
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
    axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`, { title: title }).then(() => {
      setTodos((prevTodos) => {
        return prevTodos.map((todo) => {
          if (todo.id === id) {
            return {
              ...todo,
              title: title,
            };
          }
          return todo;
        });
      });
      setTitleEdit("");
      setIdEdit(null);
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
          axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(() => {
            setTodos((prevTodos) => {
              return prevTodos.filter((todo) => todo.id !== id);
            });
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
          axios.delete("https://jsonplaceholder.typicode.com/todos").then(() => {
            setTodos([]);
            setTitleEdit("");
          });
        },
      },
    ]);
  }, []);

  useEffect(() => {
    const config = {
      params: {
        _limit: 5,
      },
    };
    //tạo GET request để lấy danh sách todos
    axios.get("https://jsonplaceholder.typicode.com/todos", config).then((response) => {
      //lấy danh sách todos từ response.data
      const todos = response.data;
      //setTodos với danh sách todos vừa lấy được
      setTodos(todos);
    });
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
