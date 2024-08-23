import { View, StyleSheet } from "react-native";
import TodoItem from "./TodoItem";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
  handleChangeCheckBox: (id: number) => void;
  handleGetTodo: (id: number, title: string) => void;
  handleDeleteTodo: (id: number) => void;
  idEdit: number | null;
}

function TodoList({ todos, handleChangeCheckBox, handleGetTodo, handleDeleteTodo, idEdit }: TodoListProps) {
  return (
    <View style={styles.wrapper}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChangeCheckBox={handleChangeCheckBox}
          handleGetTodo={handleGetTodo}
          handleDeleteTodo={handleDeleteTodo}
          idEdit={idEdit}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {},
});
export default TodoList;
