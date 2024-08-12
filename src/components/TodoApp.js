import { View, StyleSheet } from "react-native";
import Header from "./layout/Header";

import TodoAction from "./TodoAction";
import TodoList from "./TodoList";

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
