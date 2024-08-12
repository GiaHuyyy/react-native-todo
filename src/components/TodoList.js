import { View, Text, StyleSheet } from "react-native";
import { TodoItem } from "../components";
function TodoList() {
  return (
    <View style={styles.wrapper}>
        <TodoItem title="react"/>
        <TodoItem title="reactjs"/>
        <TodoItem title="react-native"/>                     
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
  },
});
export default TodoList;
