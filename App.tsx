import React, { useEffect } from "react";
import { View } from "react-native";
import { Provider } from "react-redux";

import { useFonts } from "expo-font";
import { setCustomText, setCustomTextInput } from "react-native-global-props";

import store from "./src/store";
import TodoApp from "./src/components";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Screen from "./src/screens";

import { RootStackParamList } from "./src/types";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins: require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      const customTextProps = {
        style: {
          fontFamily: "Poppins",
        },
      };
      setCustomText(customTextProps);
      setCustomTextInput(customTextProps);
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Hero">
          <Stack.Screen
            name="Hero"
            component={Screen.HomeScreen}
            options={{ headerShown: false }} // Hide default header
          />
          <Stack.Screen
            name="Todo"
            component={TodoApp}
            options={{ headerShown: false }} // Hide default header
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
