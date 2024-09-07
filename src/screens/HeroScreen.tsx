import React from "react";
import { View, Text, Button, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";

import { LinearGradient } from "expo-linear-gradient";

import Images from "../../assets/images";

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "Hero">;

function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  return (
    <LinearGradient colors={["#7AB7FF", "#D1E6FF"]} className="flex-1" start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}>
      <View className="flex-1 items-center mt-[47px]">
        <Text className="text-white h-8 font-extrabold">Welcome to TASKSPARK+</Text>
        <Text className="text-white w-[258] text-center h-[67px]">
          Let
          <Text className="text-[#0D0D0D]"> TaskSpark+ </Text>
          be the catalyst for your productivity journey!
        </Text>
        <Image source={Images.logo} className="mt-[242px]" />
        <Pressable
          onPress={() => navigation.navigate("Todo")}
          className="bg-white rounded-3xl h-[43px] w-[284px] mt-[182px] flex items-center justify-center"
        >
          <Text className="text-[#587DFF] text-base">Go to Todo</Text>
        </Pressable>
        <Pressable>
          <Text className="text-[#606060] mt-[42px] text-base">Already a member ?</Text>
        </Pressable>
        <Pressable>
          <Text className="text-white text-base mt-[31px]">Sign in</Text>
        </Pressable>
      </View>
    </LinearGradient>
  );
}

export default HomeScreen;
