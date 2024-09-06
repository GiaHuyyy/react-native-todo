// Todo App
import { Provider } from "react-redux";
import TodoApp from "./src/components";
import store from "./src/store";
import { View } from "react-native";
import { Text } from "react-native";

// Font
import { useFonts } from "expo-font";
import { useEffect, useState } from "react";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins: require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null; // Hoặc một component loading
  }
  return (
    <Provider store={store}>
      <View className="font-poppins flex-1">
        <TodoApp />
      </View>
    </Provider>
  );
}
