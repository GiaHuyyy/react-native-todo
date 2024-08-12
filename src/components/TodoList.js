import { View, StyleSheet } from "react-native";
import TodoItem from './TodoItem';
function TodoList() {
  const todos = [
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
  ];

  return (
    <View style={styles.wrapper}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} title={todo.title} check={todo.completed} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {},
});
export default TodoList;
