import { View, StyleSheet } from "react-native";
import { useState } from "react";

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
  const handleChangeCheckBox = (id: number) => {
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
  };

  // Handle edit todo
  const [titleEdit, setTitleEdit] = useState<string>("");
  const [idEdit, setIdEdit] = useState<number | null>(null);

  const handleGetTodo = (id: number, title: string) => {
    setTitleEdit(title);
    setIdEdit(id);
  };

  // Handle save edit todo
  const handleEditTodo = (id: number, title: string) => {
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
  };

  // Handle cancel edit todo
  const handleCancelEditTodo = () => {
    setTitleEdit("");
    setIdEdit(null);
  };

  // Handle delete todo
  const handleDeleteTodo = (id: number) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  // Handle add todo
  const handleAddTodo = (title: string) => {
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
  };

  // Handle clear all todos
  const handleClearAllTodos = () => {
    setTodos([]);
    setTitleEdit("");
  };

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
    marginTop: 20,
  },
});
export default TodoApp;
