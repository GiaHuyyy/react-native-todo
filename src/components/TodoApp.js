import { View, Text, StyleSheet } from "react-native";
import Header from "./layout/Header";

import { TodoAction, TodoList } from "../components";

function TodoApp() {
  return (
    <View style={styles.app}>
      <Header />
      <TodoAction />
      <TodoList />
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    marginTop: 20,
  },
});
export default TodoApp;
