import React, { useCallback } from "react";
import { Text, View, Pressable, KeyboardAvoidingView, ScrollView, Platform } from "react-native";
import Animated, {
  Easing,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { useFocusEffect } from "@react-navigation/native";

import DefaultForm from "../components/DefaultForm";
import InputForm from "../components/InputForm";
import Icon from "../../assets/icons";
import Ellipse from "../components/Ellipse";
import Button from "../components/Button";
import CheckBox from "../components/CheckBox";
import QuestionForm from "../components/QuestionForm";

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";

type SignInScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "SignIn">;

function SignInScreen() {
  const navigation = useNavigation<SignInScreenNavigationProp>();
  const position = useSharedValue(300); // Giá trị ban đầu của vị trí Y (bên dưới màn hình)

  // Hàm khôi phục và khởi động hoạt ảnh
  const startAnimation = useCallback(() => {
    position.value = withTiming(0, { duration: 2000, easing: Easing.out(Easing.exp) });
  }, [position]);

  // Chạy hoạt ảnh khi trang được lấy nét
  useFocusEffect(
    useCallback(() => {
      position.value = 300; // Đặt lại giá trị ban đầu
      startAnimation();
    }, [startAnimation, position]),
  );

  // Tạo kiểu hoạt ảnh dựa vào vị trí hiện tại
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: position.value }],
    };
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 10}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="flex h-full items-center">
          {/* Ellipse */}
          <Animated.View style={[animatedStyle]}>
            <Ellipse onPress={() => navigation.goBack()} />
          </Animated.View>

          {/* DefaultForm */}
          <DefaultForm className="mt-[86px]">
            <InputForm placeholder="Username" iconName={Icon.UserNameIcon} />
            <InputForm placeholder="Password" iconName={Icon.Secure} showPassword />
            <View className="mx-5 flex-row justify-between">
              <View className="flex-row">
                <CheckBox />
                <Text className="text-sm text-[#858585]">Remember me</Text>
              </View>
              <Pressable>
                <Text className="text-[#1882FF]">Forgot Password?</Text>
              </Pressable>
            </View>
            <Button
              className="mt-[20px]"
              onPress={() => navigation.navigate("Loading")}
              value="Sign In"
            />
          </DefaultForm>
          <QuestionForm
            className="mb-11 mt-auto"
            question="Don’t you have an account?"
            value="Sign Up for Free"
            onPress={() => navigation.navigate("SignUp")}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default SignInScreen;
