// Todo App
import { Provider } from "react-redux";
import TodoApp from "./src/components";
import store from "./src/store";

export default function App() {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );
}
