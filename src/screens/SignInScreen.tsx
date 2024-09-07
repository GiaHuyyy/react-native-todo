import React from "react";
import { Image, Text, View, KeyboardAvoidingView, ScrollView, Platform } from "react-native";
import DefaultForm from "../components/DefaultForm";
import InputForm from "../components/InputForm";
import Images from "../../assets/images";
import Icon from "../../assets/icons";

import Button from "../components/Button";
import CheckBox from "../components/CheckBox";

import { LinearGradient } from "expo-linear-gradient";

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { RootStackParamList } from "../types";
import { Pressable } from "react-native";

type SignInScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "SignIn">;
function SignInScreen() {
  const navigation = useNavigation<SignInScreenNavigationProp>();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 10}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="flex items-center">
          <View className="-mt-[68%] flex h-[488px] w-[488px] justify-center">
            <LinearGradient
              colors={["#FFF", "#67ADFF"]}
              className="relative flex-1 items-center rounded-full text-center"
              start={{ x: 0.5, y: 0 }}
              end={{ x: 0.5, y: 1 }}
            >
              <Pressable
                onPress={() => navigation.goBack()}
                className="absolute bottom-36 left-16 p-2 px-3"
              >
                <Image source={Icon.ArrowBackIcon} />
              </Pressable>
              <Image source={Images.logo} className="absolute bottom-20 h-[42px] w-[156px]" />
            </LinearGradient>
          </View>
          <Text className="my-[37px] text-xl text-[#8AC0FF]">Create Account</Text>
          <DefaultForm>
            <InputForm placeholder="Username" iconName={Icon.UserNameIcon} />
            <InputForm placeholder="Email" iconName={Icon.EmailIcon} />
            <InputForm placeholder="Password" iconName={Icon.Secure} showPassword />
            <InputForm placeholder="Repeat Passwrod" iconName={Icon.Secure} showPassword />
            <View className="flex-row">
              <CheckBox />
              <Text className="text-sm text-[#858585]">
                I agree to the <Text className="text-[#1882FF]">Terms & conditions</Text>
              </Text>
            </View>
            <Button className="mt-[20px]" onPress={() => navigation.navigate("Todo")} value="Sign Up"></Button>
          </DefaultForm>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default SignInScreen;
