import React from "react";
import { StyleSheet, Alert, SafeAreaView, Button } from "react-native";

// import "react-native-get-random-values";
// import { v4 as uuidv4 } from "uuid";

import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store";

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";

import {
  fetchTodos,
  addTodoAsync,
  editTodoAsync,
  deleteTodoAsync,
  toggleTodoAsync,
  clearTodosAsync,
} from "../store/todoSlice";

import Header from "./layout/Header";
import TodoAction from "./TodoAction";
import TodoList from "./TodoList";
import Footer from "./layout/Footer";

function TodoApp() {
  const dispatch = useDispatch<AppDispatch>();
  const todos = useSelector((state: RootState) => state.todos.todos);
  const themeColor = useSelector((state: RootState) => state.theme.color);

  // Fetch todos
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  // Function to handle checkbox change
  const handleChangeCheckBox = useCallback(
    (id: number) => {
      dispatch(toggleTodoAsync(id));
    },
    [dispatch],
  );

  // Handle add todo
  const handleAddTodo = useCallback(
    (title: string) => {
      dispatch(addTodoAsync({ id: Math.random(), title, completed: false }));
    },
    [dispatch],
  );

  // Handle edit todo
  const [titleEdit, setTitleEdit] = useState<string>("");
  const [idEdit, setIdEdit] = useState<number | null>(null);

  const handleGetTodo = useCallback(
    (id: number, title: string) => {
      setTitleEdit(title);
      setIdEdit(id);
    },
    [titleEdit, idEdit],
  );

  // Handle save edit todo
  const handleEditTodo = useCallback(
    (id: number, title: string) => {
      dispatch(editTodoAsync({ id, title }));
    },
    [dispatch],
  );

  // Handle cancel edit todo
  const handleCancelEditTodo = useCallback(() => {
    setTitleEdit("");
    setIdEdit(null);
  }, []);

  // Handle delete todo
  const handleDeleteTodo = useCallback(
    (id: number) => {
      Alert.alert("Delete Todo ?", "Are you sure?", [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => dispatch(deleteTodoAsync(id)),
        },
      ]);
    },
    [dispatch],
  );

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
          dispatch(clearTodosAsync());
          setTitleEdit("");
        },
      },
    ]);
  }, [dispatch]);

  type TodoScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "Todo">;
  const navigation = useNavigation<TodoScreenNavigationProp>();
  return (
    <SafeAreaView style={[styles.app]}>
      <Header themeColor={themeColor} />
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
      <Button title="Go Back" onPress={() => navigation.goBack()} />
      <Footer themeColor={themeColor} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});
export default TodoApp;
