import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from ".";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [],
};

// Async actions
export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5");
  return response.data;
});

export const addTodoAsync = createAsyncThunk("todos/addTodo", async (todo: Todo) => {
  const response = await axios.post("https://jsonplaceholder.typicode.com/todos", todo);
  return response.data;
});

export const editTodoAsync = createAsyncThunk(
  "todos/editTodo",
  async ({ id, title }: { id: number; title: string }) => {
    const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`, { title });
    return { id, title: response.data.title };
  }
);

export const deleteTodoAsync = createAsyncThunk("todos/deleteTodo", async (id: number) => {
  await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
  return id;
});

export const toggleTodoAsync = createAsyncThunk("todos/toggleTodo", async (id: number, { getState }) => {
  const state = getState() as RootState;
  const todo = state.todos.todos.find((todo) => todo.id === id);
  if (todo) {
    const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      completed: !todo.completed,
    });
    return response.data;
  }
});

export const clearTodosAsync = createAsyncThunk("todos/clearTodos", async () => {
  await axios.delete("https://jsonplaceholder.typicode.com/todos");
});

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.todos = action.payload;
      })
      .addCase(addTodoAsync.fulfilled, (state, action) => {
        state.todos.push(action.payload);
      })
      .addCase(editTodoAsync.fulfilled, (state, action) => {
        const todo = state.todos.find((todo) => todo.id === action.payload.id);
        if (todo) {
          todo.title = action.payload.title;
        }
      })
      .addCase(deleteTodoAsync.fulfilled, (state, action) => {
        state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      })
      .addCase(toggleTodoAsync.fulfilled, (state, action) => {
        const todo = state.todos.find((todo) => todo.id === action.payload.id);
        if (todo) {
          todo.completed = action.payload.completed;
        }
      })
      .addCase(clearTodosAsync.fulfilled, (state) => {
        state.todos = [];
      });
  },
});

export default todoSlice.reducer;
