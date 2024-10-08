import { StyleSheet, FlatList } from "react-native";
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
    <FlatList
      style={styles.wrapper}
      data={todos}
      keyExtractor={(item, index) => `${item.id}-${index}`}
      renderItem={({ item }) => (
        <TodoItem
          todo={item}
          handleChangeCheckBox={handleChangeCheckBox}
          handleGetTodo={handleGetTodo}
          handleDeleteTodo={handleDeleteTodo}
          idEdit={idEdit}
        />
      )}
      showsVerticalScrollIndicator={true}
    />
  );
}

const styles = StyleSheet.create({
  wrapper: {},
});
export default TodoList;
