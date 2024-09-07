import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";

import { LinearGradient } from "expo-linear-gradient";

import Images from "../../assets/images";

import Button from "../components/Button";

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "Hero">;

function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  return (
    <LinearGradient
      colors={["#7AB7FF", "#D1E6FF"]}
      className="flex-1"
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <View className="mt-[47px] flex-1 items-center px-[47px]">
        <Text className="h-8 font-extrabold text-white">Welcome to TASKSPARK+</Text>
        <Text className="h-[67px] w-[258] text-center text-white">
          Let
          <Text className="text-[#0D0D0D]"> TaskSpark+ </Text>
          be the catalyst for your productivity journey!
        </Text>
        <Image source={Images.logo} className="mt-[242px]" />
        <Button
          onPress={() => navigation.navigate("SignUp")}
          className="mt-[182px]"
          value="Sign Up"
          textColor="#587DFF"
          backgroundColor="#ffffff"
        ></Button>
        <Pressable>
          <Text className="mt-[42px] text-base text-[#606060]">Already a member ?</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("SignIn")}>
          <Text className="mt-[31px] text-base text-white">Sign in</Text>
        </Pressable>
      </View>
    </LinearGradient>
  );
}

export default HomeScreen;
